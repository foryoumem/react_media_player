import { createSlice } from "@reduxjs/toolkit"

export const explorerSlice = createSlice({
    name: "explorer",
    initialState: {
        value: {
            datalist: [],
            playlist: [],
        },
    },
    reducers: {
        onChangeDatalist: (state, action) => {
            state.value.datalist = action.payload
        }

    }
})

export const { onChangeDatalist } = explorerSlice.actions

export default explorerSlice.reducer