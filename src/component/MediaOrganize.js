import { DragDropContext, } from "react-beautiful-dnd"
import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import MediaColumn from "./MediaColumn"
import { useEffect } from "react"

import { onChangeDatalist } from "../features/explorerSlice"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
`



const MediaOrganize = () => {
    console.log("MediaOrganize Component 실행")
    const medialist = useSelector(state => state.media.value)
    const explorer = useSelector(state => state.explorer.value)
    const dispatch = useDispatch()

    const onDragEnd = ({destination, source, draggableId, type}) => {
        if (!destination) return

        console.log("Destination: ", destination)
        console.log("Source: ", source)
        console.log("Draggable ID: ", draggableId)
        console.log("Type: ", type)
    }

    
    useEffect(() => {
        console.log("MediaOrganize Component 실행: useEffect()")
        dispatch(onChangeDatalist([...medialist]))

    }, [JSON.stringify(medialist)])

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <MediaColumn data={explorer.main.list} type="main" title="Loaded media" />
                <MediaColumn data={explorer.play.list} type="play" title="Playlist" />
            </Container> 
        </DragDropContext>
    )
}

export default MediaOrganize