import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Project } from "../types"

interface FavoritesState {
    favorites: Project[]
}

const initialState: FavoritesState = {
    favorites: [],
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorites(state, action: PayloadAction<Project[]>) {
            state.favorites = action.payload
        },
    },
})

export const { setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
