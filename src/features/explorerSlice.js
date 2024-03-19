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
            state.value.play.list = action.payload
        },
        onCreatePlaylist: (state, action) => {
            state.value.save.playlist = action.payload
        },
        onChangeNonPlaylist: (state, action) => {
            state.value.save.nonPlaylist = action.payload
        },
        onChangeCurrentPlaylist: (state, action) => {
            state.value.save.playlist[state.value.save.currentPlaylistIndex].list = action.payload
        },
        onSelectMedia: (state, action) => {
            state.value.save.nonPlaylist.list = action.payload
            state.value.save.currentPlayIndex = state.value.save.nonPlaylist.length
        },
        setCurrentPlaylistIndex: (state, action) => {
            state.value.save.currentPlaylistIndex = action.payload
            state.value.save.currentPlayIndex = 0
        }

    }
})

export const {
    onChangeDatalist,
    onChangePlaylist,
    onCreatePlaylist,
    onChangeNonPlaylist,
    onChangeCurrentPlaylist,
    onSelectMedia,
    setCurrentPlaylistIndex,
} = explorerSlice.actions

export default explorerSlice.reducer