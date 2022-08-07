import { createSlice } from "@reduxjs/toolkit";

import { itemsData } from '../data/InitialData'

export const userSlice = createSlice({
    name: "users",
    initialState: {value: itemsData},
    reducers: {
        addUser: (state, action) => {
            
        }
    }
})

export default userSlice.reducer;