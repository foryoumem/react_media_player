import { DragDropContext } from "react-beautiful-dnd"
import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import MediaColumn from "./MediaColumn"

import {
    onChangeDatalist,
    onChangePlaylist,
} from "../features/explorerSlice"
import MediaCombobox from "./MediaCombobox"
import MediaPlaylistCreator from "./MediaPlaylistCreator"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
height: 98vh;
`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
height: 100%;
`

const PlayContainer = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
height: 100%;
`

const getId = (objA, objB) => {
    const maxA = objA.reduce((max, obj) => Math.max(max, obj.id), 0)
    const maxB = objB.reduce((max, obj) => Math.max(max, obj.id), 0)

    return String(Math.max(maxA, maxB) + 1)
}


const MediaExplorer = () => {
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
        console.log("MediaExplorer Component 실행: useEffect()")
        dispatch(onChangeDatalist([...medialist]))

    }, [JSON.stringify(medialist)])

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <MainContainer>
                    <MediaColumn media={explorer.main} />
                </MainContainer>
                <PlayContainer>
                    <MediaPlaylistCreator />
                    <MediaCombobox />
                    <MediaColumn media={explorer.play} />
                </PlayContainer>
            </Container> 
        </DragDropContext>
    )
}

export default MediaExplorer