import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectListPage from "./pages/ProjectListPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProjectListPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
            </Routes>
        </Router>
    )
}

export default App
