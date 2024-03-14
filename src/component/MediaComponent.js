import { DragDropContext } from "react-beautiful-dnd"
import DNDMedialist from "./DNDMedialist"

import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { onChangeMedialist } from "../features/mediaSlice"

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 8px;
`

const MediaComponent = ({data, onChangeData}) => {

    const medialist = useSelector(state => state.media.value)
    const dispatch = useDispatch()

    const [isDropDisabled, setIsDropDisabled] = useState(false)

    const onDragStart = () => {
        setIsDropDisabled(!isDropDisabled)
    }

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (!destination) return
        if (destination.droppableId === source.droppableId && source.index === destination.index) return

        
        

        const item = Array.from(medialist)
        const [remove] = item.splice(source.index, 1)
        item.splice(destination.index, 0, remove)

        dispatch(onChangeMedialist(item))
    }

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Container>
              <DNDMedialist data={medialist} isDropDisabled={false}/>
            </Container>
        </DragDropContext>
    )
}


export default MediaComponent