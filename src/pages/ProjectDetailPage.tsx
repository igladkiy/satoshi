import React, { useState, useEffect } from "react"
import Sidebar from "../components/organisms/Sidebar"
import ProjectForm from "../components/molecules/ProjectForm"
import { fetchProjects, updateProject } from "../api/mockApi"
import { useParams, useNavigate } from "react-router-dom"
import { Project } from "../types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [project, setProject] = useState<Project | null>(null)
    const [favoriteProjects, setFavoriteProjects] = useState<Project[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchProjects().then((data) => {
            setFavoriteProjects(data.slice(0, 2))
            const foundProject = data.find((proj) => proj.id === id)
            if (foundProject) setProject(foundProject)
        })
    }, [id])

    const handleUpdate = () => {
        if (project) {
            updateProject(project.id, project).then(() => {
                navigate("/")
            })
        }
    }

    const handleChange = (field: keyof Project, value: string) => {
        setProject((prev) => (prev ? { ...prev, [field]: value } : null))
    }

    if (!project) return <Typography>Loading...</Typography>

    return (
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
            <Sidebar favoriteProjects={favoriteProjects} />
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
