import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { initItem } from "./initialExplorer"

export const HOST = "http://localhost:6555"
const ICON_DIRECTORY = ""

const getMediaType = (title) => {
    const ext = title.split(".").pop()

    if (ext === "mp3" || ext === "flac")
        return "music"
    if (ext === "mp4" || ext === "mkv")
        return "video"

    return "unknown"
}

const getMediaIcon = (ext) => {
    if (ext === "mp3" || ext === "flac")
        return ICON_DIRECTORY + "app-music.png"
    if (ext === "mp4" || ext === "mkv")
        return ICON_DIRECTORY + "app-video.png"
    return ICON_DIRECTORY + "app-unknown.png"
}

export const fetchMedia = createAsyncThunk(
    "media/fetchMedia",
    async () => { 
        const response = await axios.get(`${HOST}/media`)
        const data = response.data

        data.map(media => {
            media = {
                ...initItem,
                ...media,
                type: getMediaType(media.title),
                icon: getMediaIcon(media.type),
                location: "root",
            }
        })

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