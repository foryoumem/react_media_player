import React, { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
display: flex;
border: 1px solid lightgrey;
border-radius: 2px; 
margin: 5px;
width: 70vw;
`


const MediaPlayer = ({url}) => {


    const select = useSelector(state => state.explorer.value.select)
    const play = select.options[select.currentIndex].list

    return (
        <Container>
            <iframe
                src={play[select.currentPlayMediaIndex].link}
                data-index={0}
                width="100%"
                allow="autoplay; encripted-media"
                allowFullScreen
            ></iframe>
        </Container>
    )

}


export default MediaPlayer


/*
<iframe
sandbox="allow-storage-access-by-user-activation
                allow-scripts
                allow-same-origin"
                width="560"
                height="315"
                src={url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
<video controls width="250">
                <source src={url} type="video/mp4" />
            </video>
<iframe
                ref={iframeRef}
                src={play[select.currentPlayMediaIndex].link}
                data-index={0}
                width="100%"
                allow="autoplay; encripted-media"
                allowFullScreen
            ></iframe>

            <Container>
            <ReactPlayer url={play[select.currentPlayMediaIndex].link} />
        </Container>

*/