import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const Container = styled.div`
flex: 1;
border: 1px solid lightgray;
border-radius: 2px;
margin: 4px;
padding: 8px;
background: ${props => props.$isDragging ? "lightgreen" : "white"};
`

const MediaItem = ({ data, index }) => {

    return (
        <Draggable draggableId={data.id} index={index}>
            {(provide, snapshot) => (
                <Container ref={provide.innerRef} {...provide.dragHandleProps} {...provide.draggableProps}
                    $isDragging={snapshot.isDragging}>
                    {data.title}
                </Container>
            )}
        </Draggable>
    )
}

export default MediaItem