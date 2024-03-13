import { configureStore } from "@reduxjs/toolkit"
import { mediaSlice } from "../features/mediaSlice"
import { playSlice } from "../features/playSlice"

export default configureStore({
    reducer: {
        media: mediaSlice.reducer,
        play: playSlice.reducer,
    },
})