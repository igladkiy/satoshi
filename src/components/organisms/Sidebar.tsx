import React, { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SidebarMenu from "../molecules/SidebarMenu"
import { Project } from "../../types"
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

interface SidebarProps {
    favoriteProjects: Project[]
}

const Sidebar: React.FC<SidebarProps> = ({ favoriteProjects }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: { xs: sidebarOpen ? "auto" : "50px", sm: "100vh" },
                backgroundColor: "#f7f7f7",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: { xs: "flex", sm: "none" },
                    justifyContent: "flex-start",
                    position: "absolute",
                    top: 5,
                    left: 5,
                }}
            >
                <IconButton onClick={toggleSidebar} color="primary">
                    <MenuIcon />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: { xs: sidebarOpen ? "block" : "none", sm: "block" },
                    width: { xs: "100%", sm: "250px" },
                    backgroundColor: "#fff",
                    marginTop: { xs: "50px", sm: 0 },
                    padding: "20px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Favorite Projects
                </Typography>
                <SidebarMenu favoriteProjects={favoriteProjects} />
            </Box>
        </Box>
    )
}

export default Sidebar
