import { createSlice } from "@reduxjs/toolkit"

const exampleData = [
    { "id": "1", "title": "a.mp3", "link": "/music/a.mp3" },
    { "id": "2", "title": "b.mp3", "link": "/music/b.mp3" },
    { "id": "3", "title": "c.mp3", "link": "/music/c.mp3" },
    { "id": "4", "title": "d.mp3", "link": "/music/d.mp3" },
    { "id": "5", "title": "e.mp3", "link": "/music/e.mp3" },
    { "id": "6", "title": "f.mp3", "link": "/music/f.mp3" }
]

export const playSlice = createSlice({
    name: "play",
    initialState: {
        value: exampleData,
    },
    reducers: {
        onChangePlaylist: (state, action) => {
            state.value = action.payload
        }

    }
})

export const { onChangePlaylist } = playSlice.actions

export default playSlice.reducer