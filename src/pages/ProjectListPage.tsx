import React, { useEffect } from "react"
import Sidebar from "../components/organisms/Sidebar"
import ProjectTable from "../components/organisms/ProjectTable"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../store"
import { fetchProjects } from "../store/projectsSlice"
import { setFavorites } from "../store/favoritesSlice"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const ProjectListPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { projects, loading, error } = useSelector((state: RootState) => state.projects)
    const favorites = useSelector((state: RootState) => state.favorites.favorites)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch])

    useEffect(() => {
        if (projects.length > 0) {
            dispatch(setFavorites(projects.slice(0, 2)))
        }
    }, [projects, dispatch])

    const handleEdit = (id: string) => {
        navigate(`/projects/${id}`)
    }

    if (loading) return <Typography>Loading...</Typography>
    if (error) return <Typography>Error: {error}</Typography>

    return (
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
            <Sidebar favoriteProjects={favorites} />
            <Box sx={{ flex: 1, padding: "20px" }}>
                <Typography variant="h4" gutterBottom>
                    Projects
                </Typography>
                <ProjectTable projects={projects} onEdit={handleEdit} />
            </Box>
        </Box>
    )
}

export default ProjectListPage
