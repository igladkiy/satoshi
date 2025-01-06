import React, { useState, useEffect } from "react"
import Sidebar from "../components/organisms/Sidebar"
import ProjectTable from "../components/organisms/ProjectTable"
import { fetchProjects } from "../api/mockApi"
import { useNavigate } from "react-router-dom"
import { Project } from "../types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const ProjectListPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [favoriteProjects, setFavoriteProjects] = useState<Project[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchProjects().then((data) => {
            setProjects(data)
            setFavoriteProjects(data.slice(0, 2)) // Assume first 2 projects are favorites
        })
    }, [])

    const handleEdit = (id: string) => {
        navigate(`/projects/${id}`)
    }

    return (
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
            <Sidebar favoriteProjects={favoriteProjects} />
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
