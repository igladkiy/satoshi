import React from "react"
import Typography from "@mui/material/Typography"

interface LabelProps {
    text: string
    htmlFor?: string
    style?: React.CSSProperties
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, style }) => {
    return (
        <Typography
            variant="body1"
            component="label"
            htmlFor={htmlFor}
            style={style}
            sx={{ display: "block", marginBottom: "4px", color: "#333" }}
        >
            {text}
        </Typography>
    )
}

export default Label
