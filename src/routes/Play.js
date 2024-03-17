import { useLocation } from "react-router-dom";
import MediaPlaylist from "../component/MediaPlaylist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onChangeSavelist } from "../features/explorerSlice";
import { useSelector } from "react-redux";


export default function Play() {

    const media = useLocation()
    console.log("Play Compoennet location: ", media.state)
    const save = useSelector(state => state.explorer.value.save)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onChangeSavelist([...save.list, media.state]))
    }, [JSON.stringify(media.state)])

    return (
        <div>
            <MediaPlaylist />
        </div>
    )
}