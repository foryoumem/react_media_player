import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { onCreatePlaylist } from "../features/explorerSlice"

const Container = styled.div`
display: flex;
margin-bottom: 4px;
`

const PlaylistNameWriter = styled.input`
width: 100%;
`

const PlaylistAddButton = styled.button`
flex-shrink: 0;
margin-left: 4px;
`

const MediaPlaylistCreator = () => {
    const [name, setName] = useState("")
    const play = useSelector(state => state.explorer.value.play)
    const save = useSelector(state => state.explorer.value.save)
    const dispatch =  useDispatch()

    const onChange = (event) => {
        setName(event.target.value)
    }

    const onCreate = (event) => {
        console.log("Playlist Create")
        const id = save.playlist.length ? save.playlist[save.playlist.length - 1].id + 1 : 0
        const newList = {...play, title: name, id: id}
        dispatch(onCreatePlaylist([...save.playlist, newList]))
        setName("")
    }


    return (
        <Container>
            <PlaylistNameWriter onChange={onChange} value={name}/>
            <PlaylistAddButton onClick={onCreate}>추가</PlaylistAddButton>
        </Container>
    )
}

export default MediaPlaylistCreator