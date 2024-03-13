import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const SPREADSHEET_ID = "1gdNAGP2vxHAE06PWnbot_w6zBLGGlEg57cWxneUoejY"
const API_KEY = "AIzaSyBffgAm4m2EVsplQKCyc18ebFB6l5vCxFk"
const MEDIA_DATABASE_HOST = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/sheet1!A1:C100?key=${API_KEY}`

export const fetchMedia = createAsyncThunk(
    "media/fetchMedia",
    async () => {
        
        const response = await axios.get(MEDIA_DATABASE_HOST)

        if (response.data && response.data.values) {
            const [header, ...rows] = response.data.values
            const data = rows.map(row => {
                return row.reduce((obj, value, index) => {
                    obj[header[index]] = value
                    return obj
                }, {})
            })
            return data
        }
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