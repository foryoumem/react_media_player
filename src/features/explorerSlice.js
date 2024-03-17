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
        onChangeSavelist: (state, action) => {
            state.value.save.list = action.payload
        },
    }
})

export const {
    onChangeDatalist,
    onChangePlaylist,
    onChangeSavelist
} = explorerSlice.actions

export default explorerSlice.reducer