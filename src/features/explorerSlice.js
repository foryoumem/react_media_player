import { createSlice } from "@reduxjs/toolkit"

export const explorerSlice = createSlice({
    name: "explorer",
    initialState: {
        value: {
            main: {
                id: "Column-1",
                title: "Loaded media",
                list: [],
            },
            play: {
                id: "Column-2",
                title: "Playlist",
                list: [],
            },
        },
    },
    reducers: {
        onChangeDatalist: (state, action) => {
            state.value.main.list = action.payload
        }

    }
})

export const { onChangeDatalist } = explorerSlice.actions

export default explorerSlice.reducer