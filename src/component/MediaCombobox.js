import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { setCurrentSelectOption } from "../features/explorerSlice"

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
    console.log("Media Combobox")
    const play = useSelector(state => state.explorer.value.play)
    const select = useSelector(state => state.explorer.value.select)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {  
        console.log("MEdiaCombobox: useEffect()")
        console.log(select.currentIndex)
    }, [select.currentIndex])

    const onChangePlaylist = (event) => {
        console.log("Current Combobox index: ", event.target.value)
        dispatch(setCurrentSelectOption(event.target.value))
    }

    const onRunPlaylist = () => {
        console.log(select.currentIndex)
        if (select.currentIndex === -1) return

        navigate("/play", { state: {type: "playlist", index: select.currentIndex, currentPlayMediaIndex: 0}})
    }

    return (
        <Container>
            <Combobox onChange={onChangePlaylist} value={select.currentIndex}>
                {
                    select.options.map(list => (
                        <option 
                        key={list.id} 
                        value={list.id}
                        defaultValue={select.currentIndex === list.value}
                        >
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