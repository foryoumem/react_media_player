import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { appendPlaylist, onUpdatePlaylist } from "../app/storage"
import { appendSelectOption, setCurrentSelectOption } from "../features/explorerSlice"
import { useDispatch } from "react-redux"
import { initColumn } from "../features/initialExplorer"

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
    const select = useSelector(state => state.explorer.value.select)
    const dispatch = useDispatch()

    useEffect(() => {
        onUpdatePlaylist(select.options)
    }, [select.options.length])

    const onChange = (event) => {
        setName(event.target.value)
    }

    const onCreate = (event) => {
        const id = select.options.length ? select.options[select.options.length - 1].id + 1 : 0
        const newList = {...initColumn, title: name, id: id}
        dispatch(appendSelectOption(newList))

        // 바로 위에서 select.option에 요소를 추가해 크기가 변경됨
        // 하지만 Redux 구조때문에 getter를 쓰지 않으면 변경된 크기값을 바로 받아올 수 없음
        // 그래서 -1 안함
        dispatch(setCurrentSelectOption(select.options.length))
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



