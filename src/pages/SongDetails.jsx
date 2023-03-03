import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import {setActiveSong, playPause} from '../redux/features/playerSlice'

const SongDetails = () => {
    const {songid} = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state)=>state.player)

return (
<div>SongDetails</div>
);
}

export default SongDetails;
