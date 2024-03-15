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
        }

    }
})

export const { onChangeDatalist } = explorerSlice.actions

export default explorerSlice.reducer