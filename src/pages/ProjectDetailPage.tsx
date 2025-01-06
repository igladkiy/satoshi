import React from "react"
import Sidebar from "../components/organisms/Sidebar"
import ProjectForm from "../components/molecules/ProjectForm"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../store"
import { updateProject } from "../store/projectsSlice"
import { setFavorites } from "../store/favoritesSlice"
import { useParams, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Project } from "../types"

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const projects = useSelector((state: RootState) => state.projects.projects)
    const favorites = useSelector((state: RootState) => state.favorites.favorites)
    const project = projects.find((proj) => proj.id === id)

    const handleChange = (field: keyof Project, value: string) => {
        if (project) {
            dispatch(updateProject({ id: project.id, data: { [field]: value } }))
        }
    }

    const handleUpdate = () => {
        if (project) {
            const updatedFavorites = [...projects].slice(0, 2)
            dispatch(setFavorites(updatedFavorites))
            navigate("/")
        }
    }

    if (!project) return <Typography>Loading...</Typography>

    return (
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
            <Sidebar favoriteProjects={favorites} />
            <Box sx={{ flex: 1, padding: "20px" }}>
                <Typography variant="h4" gutterBottom>
                    Edit Project
                </Typography>
                <ProjectForm project={project} onUpdate={handleUpdate} onChange={handleChange} />
            </Box>
        </Box>
    )
}

export default ProjectDetailPage
