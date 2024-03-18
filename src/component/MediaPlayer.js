import ReactPlayer from "react-player"
import styled from "styled-components"

const Container = styled.div`
display: flex;
border: 1px solid lightgrey;
border-radius: 2px; 
margin: 5px;
width: 75vw;
`

const MediaPlayer = ({url}) => {

    return (
        <Container>
            <iframe
                width="560"
                height="315"
                src="https://youtu.be/g_wuMTZnoYo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Container>
    )

}


export default MediaPlayer