import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const Container = styled.div`
display: flex;
margin-bottom: 5px;
`

const Combobox = styled.select`
width: 100%;
`

const MovePlaylistButton = styled.button`
flex-shrink: 0;
margin-left: 4px;
`

const MediaCombobox = () => {

    const [playIndex, setPlayIndex] = useState(-1)
    const save = useSelector(state => state.explorer.value.save)
    const navigate = useNavigate()

    const onChangePlaylist = (event) => {
        console.log("Current Combobox index: ", event.target.value)
        setPlayIndex(event.target.value)
    }

    const onRunPlaylist = () => {
        console.log(playIndex)
        if (playIndex === -1) return

        navigate("/play", { state: {type: "playlist", data: {...save.playlist[playIndex], currentPlayIndex: 0}}})
    }

    return (
        <Container>
            <Combobox onChange={onChangePlaylist}>
                {
                    save.playlist.map(list => (
                        <option key={list.id} value={list.id}>
                            {list.title}
                        </option>
                    ))
                }
            </Combobox>
            <MovePlaylistButton onClick={onRunPlaylist}>실행</MovePlaylistButton>
        </Container>
    )
}


export default MediaCombobox