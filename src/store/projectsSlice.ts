import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Project } from "../types"

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
    const response = await fetch("http://localhost:5000/projects")
    if (!response.ok) {
        throw new Error("Failed to fetch projects")
    }
    return (await response.json()) as Project[]
})

export const updateProject = createAsyncThunk(
    "projects/updateProject",
    async (updatedProject: { id: string; data: Partial<Project> }) => {
        const { id, data } = updatedProject

        const response = await fetch(`http://localhost:5000/projects/${id}`)
        if (!response.ok) {
            throw new Error("Failed to fetch project")
        }

        const currentProject = await response.json()

        const updatedFields = { ...currentProject, ...data }

        const updateResponse = await fetch(`http://localhost:5000/projects/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFields),
        })

        if (!updateResponse.ok) {
            throw new Error("Failed to update project")
        }

        return await updateResponse.json()
    }
)

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        updateProjectInState(state, action: PayloadAction<Project>) {
            const updatedProject = action.payload
            const projectIndex = state.projects.findIndex((proj) => proj.id === updatedProject.id)
            if (projectIndex !== -1) {
                state.projects[projectIndex] = updatedProject
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
            .addCase(updateProject.pending, (state) => {
                state.loading = true
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                state.loading = false
                const updatedProject = action.payload
                const projectIndex = state.projects.findIndex((proj) => proj.id === updatedProject.id)
                if (projectIndex !== -1) {
                    state.projects[projectIndex] = updatedProject
                }
            })
            .addCase(updateProject.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Failed to update project"
            })
    },
})

export const { updateProjectInState } = projectsSlice.actions
export default projectsSlice.reducer
