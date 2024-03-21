import React from "react"
import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { initColumn } from "../features/initialExplorer"

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
    display: flex;
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

const getItemIcon = (title) => {
    const ext = title.split(".").pop()

    if (ext === "mp3" || ext === "flac")
        return "app-music.png"
    if (ext === "mp4" || ext === "mkv")
        return "app-video.png"

    return "rk-unknown.png"
}

const MediaItemLayout = ({data}) => {

    const play = {...initColumn}
    play.droppableId = "play"
    play.title = "Non-playlist media"
    play.list = [data]

    return (
        <React.Fragment>
            <ItemIcon src={getItemIcon(data.title)}></ItemIcon>
            <ItemTitle to={HOST + "/play"} state={{type: "non-playlist", playlist: play, index: -1, currentPlayMediaIndex: 0}}>{data.title}</ItemTitle>
        </React.Fragment>
    )
}

export const MediaItemCloneLayout = ({data}) => {
    return (
        <React.Fragment>
            <ItemIcon src={getItemIcon(data.title)}></ItemIcon>
            <div>{data.title}</div>
        </React.Fragment>
    )
}

const MediaItem = ({ data, index, useClone = false }) => {

    return (
        <React.Fragment>
            {
                useClone ? 
                <ContainerCopy>
                    <MediaItemCloneLayout data={data} />
                </ContainerCopy> :
                <Draggable draggableId={data.id} index={index}>
                    {(provide, snapshot) => (
                        <Container
                            ref={provide.innerRef}
                            {...provide.draggableProps}
                            {...provide.dragHandleProps}
                            $isDragging={snapshot.isDragging}
                        >
                            <MediaItemLayout data={data} />
                        </Container>
                    )}
                </Draggable>
            }
        </React.Fragment>
    )
}

export default MediaItem