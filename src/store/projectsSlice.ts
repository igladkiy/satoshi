import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Project } from "../types"
import { fetchProjectsFromMockApi } from "../api/mockApi"

interface ProjectsState {
    projects: Project[]
    loading: boolean
    error: string | null
}

const initialState: ProjectsState = {
    projects: [],
    loading: false,
    error: null,
}

export const fetchProjects = createAsyncThunk("projects/fetchProjects", async () => {
    return await fetchProjectsFromMockApi()
})

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        updateProject(state, action: PayloadAction<{ id: string; data: Partial<Project> }>) {
            const { id, data } = action.payload
            const project = state.projects.find((proj) => proj.id === id)
            if (project) {
                Object.assign(project, data)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false
                state.projects = action.payload
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Failed to fetch projects"
            })
    },
})

export const { updateProject } = projectsSlice.actions
export default projectsSlice.reducer
