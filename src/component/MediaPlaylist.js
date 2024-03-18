import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import MediaColumn from "./MediaColumn"
import styled from "styled-components"
import MediaPlayer from "./MediaPlayer"
import { onChangeSavelist } from "../features/explorerSlice"
import { useDispatch } from "react-redux"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
height: 98vh;
`

const MediaPlaylist = () => {
    
    const play = useSelector(state => state.explorer.value.save)
    const dispatch = useDispatch()
    console.log(play)

    const onDragEnd = ({destination, source, draggableId, type}) => {
        if (!destination) return

        if (source.droppableId === "play" && destination.droppableId === "play") {
            console.log("Play to Play: Swap")

            const arr = [...play.list]
            const [removed] =  arr.splice(source.index, 1)
            arr.splice(destination.index, 0, removed)

            dispatch(onChangeSavelist(arr))

            return
        }
    }
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <MediaPlayer url={play.list.length ? play.list[play.currentPlayIndex].link : null} />
                <MediaColumn media={play} />
            </Container>
        </DragDropContext>
    )
}

export default MediaPlaylist