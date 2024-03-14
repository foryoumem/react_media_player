import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const Container = styled.div`
    border: 1px solid lightgray;
    margin: 4px;
    border-radius: 2px;
    padding: 8px;
    background: ${props => props.isDragging ? "lightgreen" : "white"};
    `

const DragItem = ({ data, index, type }) => {
    console.log("Component: DragItem")
    console.log("data.id: ", data.id)
    return (
        <Draggable draggableId={data.id} index={index} type={type}>
            {(provided, snapshot) => (
                <Container ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                isDragging={snapshot.isDragging}>
                    {data.title}
                </Container>
            )}
        </Draggable>
    )
}

export default DragItem