import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  return (
    <div className="flex flex-col w-56 p-4 bg-white/5 bg-opacity-80 rounded-lg cursor-pointer backdrop-blur-sm animate-slideup">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause song={song} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>
      <div className="flex flex-col mt-1">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="text-sm mt-1 text-gray-300 truncate">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song?.subtitle}</Link>
        </p>
      </div>
    </div>
  )
};

export default SongCard;
