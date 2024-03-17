import React from "react"
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HOST = "http://localhost:3000"

const Container = styled.div`
display: flex;
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

const ItemTitle = styled(Link)`
    text-decoration: none;
`

const ItemIcon = styled.img`
width: 24px;
height: 24px;
margin-right: 4px;
`

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
                            <ItemIcon src="music.png"/>
                            <ItemTitle to={HOST + "/play"} state={data}>{data.title}</ItemTitle>
                        </Container>
                    )}
                </Draggable>
            }
        </React.Fragment>
    )
}

export default MediaItem