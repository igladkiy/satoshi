import { Project } from "../types"

const mockProjects: Project[] = [
    {
        id: "project_a",
        name: "Project A",
        description: "Description A",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "John Doe",
    },
    {
        id: "project_b",
        name: "Project B",
        description: "Description B",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "Jane Smith",
    },
    {
        id: "project_c",
        name: "Project C",
        description: "Description C",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "Alice Brown",
    },
]

export const fetchProjectsFromMockApi = async (): Promise<Project[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProjects)
        }, 1000)
    })
}
