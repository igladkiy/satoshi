import { Project } from "types/index"

const mockProjects: Project[] = [
    {
        id: "project_a",
        name: "Project A",
        description: "Description of Project A",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "John Doe",
    },
    {
        id: "project_b",
        name: "Project B",
        description: "Description of Project B",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "Jane Smith",
    },
    {
        id: "project_c",
        name: "Project C",
        description: "Description of Project C",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "John Doe",
    },
    {
        id: "project_d",
        name: "Project D",
        description: "Description of Project D",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "Jane Smith",
    },
    {
        id: "project_e",
        name: "Project E",
        description: "Description of Project E",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        manager: "John Doe",
    },
]

export const fetchProjects = (): Promise<Project[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProjects)
        }, 500)
    })
}

export const updateProject = (id: string, updatedData: Partial<Project>): Promise<Project> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const projectIndex = mockProjects.findIndex((project) => project.id === id)
            if (projectIndex === -1) {
                reject(new Error("Project not found"))
                return
            }

            mockProjects[projectIndex] = {
                ...mockProjects[projectIndex],
                ...updatedData,
            }

            resolve(mockProjects[projectIndex])
        }, 500)
    })
}
