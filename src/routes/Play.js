import { useLocation } from "react-router-dom";
import MediaPlaylist from "../component/MediaPlaylist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSelectMedia, setCurrentPlaylistIndex } from "../features/explorerSlice";
import { useSelector } from "react-redux";
import { initColumn } from "../features/initialExplorer";


export default function Play() {

    const media = useLocation()
    console.log("Play Compoennet location: ", media.state.type)



    return (
        <div>
            <MediaPlaylist column={media.state.data}/>
        </div>
    )
}