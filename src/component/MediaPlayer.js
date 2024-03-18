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
            <ReactPlayer url={url}/>
        </Container>
    )

}


export default MediaPlayer