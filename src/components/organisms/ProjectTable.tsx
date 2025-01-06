import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import ProjectRow from "../molecules/ProjectRow"
import { Project } from "../../types"

interface ProjectTableProps {
    projects: Project[]
    onEdit: (id: string) => void
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects, onEdit }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Project ID</TableCell>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Project Manager</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {projects.map((project) => (
                    <ProjectRow key={project.id} project={project} onEdit={onEdit} />
                ))}
            </TableBody>
        </Table>
    )
}

export default ProjectTable
