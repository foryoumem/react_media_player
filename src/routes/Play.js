import { useLocation } from "react-router-dom";
import MediaPlaylist from "../component/MediaPlaylist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onSelectMedia, setCurrentPlaylistIndex } from "../features/explorerSlice";
import { useSelector } from "react-redux";
import { initColumn } from "../features/initialExplorer";
import { onLoadPlaylistIndexOf } from "../app/storage";
import styled from "styled-components";
import MediaHeader from "../component/MediaHeader";

const Container = styled.div`
display: flex;
flex-direction: column;
`


export default function Play() {

    const media = useLocation()
    console.log("Play Compoennet location: ", media.state.type)

    return (
        <Container>
            <MediaHeader />
            <MediaPlaylist />
        </Container>
    )
}