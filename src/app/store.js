import { configureStore } from "@reduxjs/toolkit"
import { mediaSlice } from "../features/mediaSlice"
import { explorerSlice } from "../features/explorerSlice"
import { playerSlice } from "../features/playerSlice"

export default configureStore({
    reducer: {
        media: mediaSlice.reducer,
        explorer: explorerSlice.reducer,
        player: explorerSlice.reducer,
    },
})