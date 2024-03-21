import React, { useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import MediaColumn from "./MediaColumn"
import styled from "styled-components"
import MediaPlayer from "./MediaPlayer"
import { onChangeCurrentPlaylist, onChangeSelectOption, setPlayMediaIndex } from "../features/explorerSlice"
import { useDispatch } from "react-redux"
import MediaCombobox from "./MediaCombobox"
import { useLocation } from "react-router-dom"
import { initColumn } from "../features/initialExplorer"
import { onLoadPlaylist, onUpdatePlaylistIndexOf } from "../app/storage"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
height: 98vh;
`

const ListContainer = styled.div`
display: flex;
flex-direction: column;
margin: 5px;
width: 30vw;
`


const MediaPlaylist = () => {
    console.log("MediaPlaylist Component")
    
    const select = useSelector(state => state.explorer.value.select)
    const play = select.options[select.currentIndex].list
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("MediaPlaylist Component: useEffect()")
        onUpdatePlaylistIndexOf(select.currentIndex, play)
    }, [play])

    const onDragEnd = ({destination, source}) => {
        if (!destination) return
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) return

        if (source.droppableId === "play" && destination.droppableId === "play") {
            console.log("Play to Play: Swap")

            const arr = [...play]
            const [removed] =  arr.splice(source.index, 1)
            arr.splice(destination.index, 0, removed)

            dispatch(onChangeSelectOption(arr))
            return
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {
                    play.length ? <MediaPlayer url={play[select.currentPlayMediaIndex].link} /> :
                    <MediaPlayer url={null}/>
                }
                <ListContainer>
                    <MediaCombobox />
                    <MediaColumn media={select.options[select.currentIndex]} type="playlist" />
                </ListContainer>      
            </Container>
        </DragDropContext>
    )
}

export default MediaPlaylist