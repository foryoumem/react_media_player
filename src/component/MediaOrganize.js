import { DragDropContext, } from "react-beautiful-dnd"
import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import MediaColumn from "./MediaColumn"
import { useEffect } from "react"

import {
    onChangeDatalist,
    onChangePlaylist,
} from "../features/explorerSlice"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
height: 98vh;
`

const getId = (objA, objB) => {
    const maxA = objA.reduce((max, obj) => Math.max(max, obj.id), 0)
    const maxB = objB.reduce((max, obj) => Math.max(max, obj.id), 0)

    return String(Math.max(maxA, maxB) + 1)
}


const MediaOrganize = () => {
    console.log("MediaOrganize Component 실행")

    const medialist = useSelector(state => state.media.value)
    const explorer = useSelector(state => state.explorer.value)
    const dispatch = useDispatch()

    const onDragEnd = ({destination, source, draggableId, type}) => {
        if (!destination) return

        const main = explorer.main.list
        const play = explorer.play.list
        
        if (source.droppableId === "main" && destination.droppableId === "play") {
            console.log("Main to Play: Add")

            const droppedTarget = main[source.index]
            const id = getId(main, play)
            const item = {...droppedTarget, id: id}

            const arr = [...play]
            arr.splice(destination.index, 0, item)           
            
            dispatch(onChangePlaylist(arr))

            return
        }

        if (source.droppableId === "play" && destination.droppableId === "play") {
            console.log("Play to Play: Swap")

            const arr = [...play]
            const [removed] =  arr.splice(source.index, 1)
            arr.splice(destination.index, 0, removed)

            dispatch(onChangePlaylist(arr))

            return
        }


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
                <MediaColumn media={explorer.main} />
                <MediaColumn media={explorer.play} />
            </Container> 
        </DragDropContext>
    )
}

export default MediaOrganize