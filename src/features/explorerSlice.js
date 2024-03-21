import { createSlice } from "@reduxjs/toolkit"
import { init } from "./initialExplorer"

export const explorerSlice = createSlice({
    name: "explorer",
    initialState: {
        value: init,
    },
    reducers: {
        onChangeDatalist: (state, action) => {
            state.value.main.list = action.payload
        },
        onChangePlaylist: (state, action) => {
            state.value.select.options = action.payload
        },
        onCreatePlaylist: (state, action) => {
            state.value.save.playlist = action.payload
        },
        onChangeSelectOption: (state, action) => {
            state.value.select.options[state.value.select.currentIndex].list = action.payload
        },
        appendSelectOption: (state, action) => {
            state.value.select.options = [...state.value.select.options, action.payload]
        },
        setCurrentSelectOption: (state, action) => {
            state.value.select.currentIndex = action.payload
        },
        onClickMedia: (state, action) => {
            if (action.payload.type === "explorer") {

            } else {
                state.value.select.currentIndex = action.payload.index
            }
        }
    }
})

export const {
    onChangeDatalist,
    onChangePlaylist,
    onCreatePlaylist,
    onChangeSelectOption,
    appendSelectOption,
    setCurrentSelectOption,
    onClickMedia,
} = explorerSlice.actions

export default explorerSlice.reducer