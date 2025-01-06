import React from "react"
import { Project } from "../../types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

interface ProjectFormProps {
    project: Project
    onUpdate: () => void
    onChange: (field: keyof Project, value: string) => void
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onUpdate, onChange }) => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            {/* Project ID (Read-Only) */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography sx={{ minWidth: "150px" }}>Project ID:</Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {project.id}
                </Typography>
            </Box>

            {/* Project Name */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography sx={{ minWidth: "150px" }}>Project Name:</Typography>
                <TextField
                    fullWidth
                    value={project.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    variant="outlined"
                    size="small"
                />
            </Box>

            {/* Description */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography sx={{ minWidth: "150px" }}>Description:</Typography>
                <TextField
                    fullWidth
                    value={project.description}
                    onChange={(e) => onChange("description", e.target.value)}
                    variant="outlined"
                    size="small"
                    multiline
                    rows={3}
                />
            </Box>

            {/* Start Date */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography sx={{ minWidth: "150px" }}>Start Date:</Typography>
                <TextField
                    fullWidth
                    value={project.startDate}
                    onChange={(e) => onChange("startDate", e.target.value)}
                    type="date"
                    variant="outlined"
                    size="small"
                />
            </Box>

            {/* End Date */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography sx={{ minWidth: "150px" }}>End Date:</Typography>
                <TextField
                    fullWidth
                    value={project.endDate}
                    onChange={(e) => onChange("endDate", e.target.value)}
                    type="date"
                    variant="outlined"
                    size="small"
                />
            </Box>

            {/* Project Manager */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography sx={{ minWidth: "150px" }}>Project Manager:</Typography>
                <TextField
                    fullWidth
                    value={project.manager}
                    onChange={(e) => onChange("manager", e.target.value)}
                    variant="outlined"
                    size="small"
                />
            </Box>

            {/* Update Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px" }}>
                <Button variant="contained" color="primary" onClick={onUpdate}>
                    Update
                </Button>
            </Box>
        </Box>
    )
}

export default ProjectForm
