import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        value: {
            listId: "",
            listIndex: 0,
            itemIndex: 0,
        },
    },
    reducers: {

    },
})

export const {} = playerSlice.actions
export default playerSlice.reducer