import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const HOST = "http://localhost:6555"

export const fetchMedia = createAsyncThunk(
    "media/fetchMedia",
    async () => { 
        const response = await axios.get(`${HOST}/media`)
        const data = response.data

        return data
    }
)

export const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        value: [],
    },
    reducers: {
        onChangeMedialist: (state, action) => {
            state.value = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMedia.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export const { onChangeMedialist } = mediaSlice.actions

export default mediaSlice.reducer