import { useLocation } from "react-router-dom";
import MediaPlaylist from "../component/MediaPlaylist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSelectMedia, setCurrentPlaylistIndex } from "../features/explorerSlice";
import { useSelector } from "react-redux";


export default function Play() {

    const media = useLocation()
    console.log("Play Compoennet location: ", media.state.type)
    const save = useSelector(state => state.explorer.value.save)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Play Component: useEffect()")

        if (media.state.type === "non-playlist") {
            const id = save.nonPlaylist.list.length ? save.nonPlaylist.list[save.nonPlaylist.list.length - 1].id + 1 : 0
            dispatch(onSelectMedia([...save.nonPlaylist.list, {...media.state.data, id: String(id)}]))
        } else if (media.state.type === "playlist") {
            dispatch(setCurrentPlaylistIndex(media.state.index))
        }

    }, [media.state.type])

    return (
        <div>
            <MediaPlaylist />
        </div>
    )
}