import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Project } from "../../types"

interface SidebarMenuProps {
    favoriteProjects: Project[]
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ favoriteProjects }) => {
    return (
        <List>
            {favoriteProjects.map((project) => (
                <ListItem key={project.id} sx={{ padding: "5px 0" }}>
                    <ListItemText primary={project.name} />
                </ListItem>
            ))}
        </List>
    )
}

export default SidebarMenu
