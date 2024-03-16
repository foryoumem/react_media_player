import React from "react"
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const Container = styled.div`
border: 1px solid lightgray;
border-radius: 2px;
margin: 4px;
padding: 8px;
background: ${props => props.$isDragging ? "lightgreen" : "white"};
`
const ContainerCopy = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
margin: 4px;
padding: 8px;
background: lightblue;

& ~ ${Container} {
    transform: none !important;
}

& ~ [data-rbd-placeholder-context-id] {
    display: none !important;
}
`



//data-rbd-placeholder-context-id


const MediaItem = ({ data, index, useClone = false }) => {

    return (
        <React.Fragment>
            {
                useClone ? <ContainerCopy>
                    {data.title}
                </ContainerCopy> : <Draggable draggableId={data.id} index={index}>
                    {(provide, snapshot) => (
                        <Container
                            ref={provide.innerRef}
                            {...provide.draggableProps}
                            {...provide.dragHandleProps}
                            $isDragging={snapshot.isDragging}
                        >
                            {data.title}
                        </Container>
                    )}
                </Draggable>
            }
        </React.Fragment>
    )
}

export default MediaItem