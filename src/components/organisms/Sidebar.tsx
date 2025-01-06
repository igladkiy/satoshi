import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { Project } from "../../types"

interface SidebarProps {
    favoriteProjects: Project[]
}

const Sidebar: React.FC<SidebarProps> = ({ favoriteProjects }) => {
    return (
        <Box sx={{ width: "20%", padding: "20px", borderRight: "1px solid #ccc" }}>
            <Typography variant="h6">Favorite Projects</Typography>
            <List>
                {favoriteProjects.map((project) => (
                    <ListItem key={project.id}>{project.name}</ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar
