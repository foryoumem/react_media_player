import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import MediaColumn from "./MediaColumn"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
`



const MediaOrganize = () => {
    const medialist = useSelector(state => state.media.value)
    const playlist = useSelector(state => state.play.value)
    const dispatch = useDispatch()

    const onDragEnd = ({destination, source, draggableId, type}) => {
        if (!destination) return

        console.log("Destination: ", destination)
        console.log("Source: ", source)
        console.log("Draggable ID: ", draggableId)
        console.log("Type: ", type)

    }
    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <MediaColumn data={medialist} type="media" title="Loaded media" />
                <MediaColumn data={playlist} type="play" title="Playlist" />
            </Container> 
        </DragDropContext>
    )
}

export default MediaOrganize