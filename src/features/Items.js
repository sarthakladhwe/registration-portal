import { createSlice } from "@reduxjs/toolkit";

import { itemsData } from '../data/InitialData'

export const userSlice = createSlice({
    name: "users",
    initialState: {value: itemsData},
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer;