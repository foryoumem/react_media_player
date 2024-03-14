import { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { fetchMedia, onChangeMedialist } from "../features/mediaSlice"
import { onChangePlaylist } from "../features/playSlice"
import { DragDropContext } from "react-beautiful-dnd"

import styled from "styled-components"

import MediaComponent from "../component/MediaComponent"

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Header = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

const Media = styled.div`
`
// display: flex;
// justify-content: space-around;
// width: 100%;


export default function Root() {
    console.log("Root Component 실행")

    const medialist = useSelector(state => state.media.value)
    const playlist = useSelector(state => state.play.value)
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log("Dependency array의 요소 변경으로 useEffect 실행")
        dispatch(fetchMedia())

        return () => {
            console.log("useEffect return: Component의 Unmount 또는 Update로 지워질 때 실행")
        }
    }, [])

    //
    
    return (
        <RootContainer>
            <Header>Media Player</Header>
            <MediaComponent />
        </RootContainer>
    )
}

