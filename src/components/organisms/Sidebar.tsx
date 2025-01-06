import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SidebarMenu from "../molecules/SidebarMenu"
import { Project } from "../../types"

interface SidebarProps {
    favoriteProjects: Project[]
}

const Sidebar: React.FC<SidebarProps> = ({ favoriteProjects }) => {
    return (
        <Box
            sx={{
                width: "20%",
                padding: "20px",
                borderRight: "1px solid #ccc",
                backgroundColor: "#f7f7f7",
            }}
        >
            <Typography variant="h6" gutterBottom>
                Favorite Projects
            </Typography>
            <SidebarMenu favoriteProjects={favoriteProjects} />
        </Box>
    )
}

export default Sidebar
