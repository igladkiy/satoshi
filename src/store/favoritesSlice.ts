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
        addFavorite(state, action: PayloadAction<Project>) {
            state.favorites.push(action.payload)
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter((proj) => proj.id !== action.payload)
        },
    },
})

export const { setFavorites, addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
