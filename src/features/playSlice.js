import { createSlice } from "@reduxjs/toolkit"

export const playSlice = createSlice({
    name: "play",
    initialState: {
        value: [],
    },
    reducers: {
        onChangePlaylist: (state, action) => {
            state.value = action.payload
        }

    }
})

export const { onChangePlaylist } = playSlice.actions

export default playSlice.reducer