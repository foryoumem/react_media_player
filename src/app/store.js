import { configureStore } from "@reduxjs/toolkit"
import { mediaSlice } from "../features/mediaSlice"
import { explorerSlice } from "../features/explorerSlice"

export default configureStore({
    reducer: {
        media: mediaSlice.reducer,
        explorer: explorerSlice.reducer,
    },
})