import React from "react"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import CustomButton from "../atoms/Button"
import { Project } from "../../types"

interface ProjectRowProps {
    project: Project
    onEdit: (id: string) => void
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, onEdit }) => {
    return (
        <TableRow>
            <TableCell>{project.id}</TableCell>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.startDate}</TableCell>
            <TableCell>{project.endDate}</TableCell>
            <TableCell>{project.manager}</TableCell>
            <TableCell>
                <CustomButton label="Edit" onClick={() => onEdit(project.id)} />
            </TableCell>
        </TableRow>
    )
}

export default ProjectRow
