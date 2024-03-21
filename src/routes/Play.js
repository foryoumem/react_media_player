import { useLocation } from "react-router-dom";
import MediaPlaylist from "../component/MediaPlaylist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSelectMedia, setCurrentPlaylistIndex } from "../features/explorerSlice";
import { useSelector } from "react-redux";
import { initColumn } from "../features/initialExplorer";
import { onLoadPlaylistIndexOf } from "../app/storage";


export default function Play() {

    const media = useLocation()
    console.log("Play Compoennet location: ", media.state.type)

    const onPlayFromState = (state) => {
        if (state.type === "playlist") {
            return onLoadPlaylistIndexOf(state.index)
        }
        if (state.type === "non-playlist") {
            return state.playlist
        }
        return []
    } 

    return (
        <div>
            <MediaPlaylist />
        </div>
    )
}