import React from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
border: 1px solid lightgrey;
border-radius: 2px; 
margin: 5px;
width: 70vw;
`

const MediaPlayer = ({url}) => {

    return (
        <Container>
            <iframe
                src={url}
                width="100%"
                allow="autoplay"
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
*/