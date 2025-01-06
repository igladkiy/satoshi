import { configureStore } from "@reduxjs/toolkit"
import projectsReducer from "./projectsSlice"
import favoritesReducer from "./favoritesSlice"

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        favorites: favoritesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
