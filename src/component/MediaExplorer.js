import { DragDropContext } from "react-beautiful-dnd"
import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import MediaColumn from "./MediaColumn"

import MediaCombobox from "./MediaCombobox"
import MediaPlaylistCreator from "./MediaPlaylistCreator"
import { onUpdatePlaylistIndexOf } from "../app/storage"
import { onChangeDatalist, onChangeSelectOption } from "../features/explorerSlice"

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
    console.log("MediaExplorer Component")

    const medialist = useSelector(state => state.media.value)
    const explorer = useSelector(state => state.explorer.value)
    const dispatch = useDispatch()
    const main = explorer.main.list
    const play = explorer.select.options[explorer.select.currentIndex].list // Reducer 생성시 데이터가 없다면 1개의 요소를 넣어서 예외처리 안함

    useEffect(() => {
        console.log("MediaExplorer Component: useEffect()")
        dispatch(onChangeDatalist(medialist))
        onUpdatePlaylistIndexOf(play)
    }, [medialist, play])

    const onDragEnd = ({destination, source, draggableId, type}) => {
        if (!destination) return

        if (source.droppableId === "main" && destination.droppableId === "play") {
            console.log("Main to Play: Add")

            const droppedTarget = main[source.index]
            const id = getId(main, play)
            const item = {...droppedTarget, id: id}

            const arr = [...play]
            arr.splice(destination.index, 0, item)  
            
            dispatch(onChangeSelectOption(arr))

            return
        }

        if (source.droppableId === "play" && destination.droppableId === "play") {
            console.log("Play to Play: Swap")

            const arr = [...play]
            const [removed] =  arr.splice(source.index, 1)
            arr.splice(destination.index, 0, removed)

            dispatch(onChangeSelectOption(arr))

            return
        }


        console.log("Destination: ", destination)
        console.log("Source: ", source)
        console.log("Draggable ID: ", draggableId)
        console.log("Type: ", type)
    }

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <MainContainer>
                    <MediaColumn media={explorer.main} />
                </MainContainer>
                <PlayContainer>
                    <MediaPlaylistCreator />
                    <MediaCombobox />
                    <MediaColumn media={explorer.select.options[explorer.select.currentIndex]} />
                </PlayContainer>
            </Container> 
        </DragDropContext>
    )
}

export default MediaExplorer