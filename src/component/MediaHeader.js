import { Link } from "react-router-dom"
import styled from "styled-components"

const HOST = "http://localhost:3000"

const Container = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
background-color: #333;
color: #fff;
cursor: pointer;
transition: background-color 0.3s;
height: 8vh;
margin: 5px;

&:active {
    background-color: #555;
}

&>div {
    font-size: xx-large;
    text-align: center;
    padding-bottom: 4px;
}
`

const MediaHeader = () => {

    return (
        <Container to={HOST}>
            <div>Media Player</div>
        </Container>
    )
}

export default MediaHeader