import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import MediaColumn from "./MediaColumn"
import styled from "styled-components"
import ReactPlayer from "react-player"
import MediaBox from "./MediaBox"

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: inherit;
height: 98vh;
`

const MediaPlayer = ({url}) => {
    console.log(url)
    return (
        <React.Fragment>
            <ReactPlayer url={url}/>
        </React.Fragment>
    )
}

const MediaPlaylist = () => {
    
    const play = useSelector(state => state.explorer.value.save)
    console.log(play)
    

    return (
        <DragDropContext>
            <Container>
                <MediaBox />
                <MediaColumn media={play} />
            </Container>
        </DragDropContext>
    )
}

export default MediaPlaylist