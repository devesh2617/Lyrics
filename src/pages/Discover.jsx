import { useSelector } from 'react-redux';
import { SongCard, Error, Loader } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const genreTitle = 'Pop';
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select onChange={() => { }} value="" className="bg-black text-gray-300 p-3 outline-none text-small rounded-lg">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => <SongCard key={song.key} song={song} i={i} activeSong={activeSong} isPlaying={isPlaying} data={data} />)}
      </div>
    </div>
  );
};

export default Discover;
