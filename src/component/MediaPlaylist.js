import React, { useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import MediaColumn from "./MediaColumn"
import styled from "styled-components"
import MediaPlayer from "./MediaPlayer"
import { onChangeCurrentPlaylist } from "../features/explorerSlice"
import { useDispatch } from "react-redux"
import MediaCombobox from "./MediaCombobox"
import { useLocation } from "react-router-dom"
import { initColumn } from "../features/initialExplorer"

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


const MediaPlaylist = ({column}) => {
    
    const [play, setPlay] = useState(column)

    console.log("MediaPlaylist Component 실행:")
    useEffect(() => {
        console.log("MediaPlaylist Component 실행: useEffect()")
        setPlay(column)
    }, [column])

    const onDragEnd = ({destination, source}) => {
        if (!destination) return
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) return

        if (source.droppableId === "play" && destination.droppableId === "play") {
            console.log("Play to Play: Swap")

            const arr = [...play.list]
            const [removed] =  arr.splice(source.index, 1)
            arr.splice(destination.index, 0, removed)

            setPlay({...play, list: arr})
            return
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {
                    play.list.length ? <MediaPlayer url={play.list[play.currentPlayIndex].link} /> :
                    <MediaPlayer url={null}/>
                }
                <ListContainer>
                    <MediaCombobox />
                    <MediaColumn media={play} />
                </ListContainer>      
            </Container>
        </DragDropContext>
    )
}

export default MediaPlaylist