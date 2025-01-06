import React from "react"
import TextField from "@mui/material/TextField"

interface InputProps {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text", disabled = false }) => {
    return (
        <TextField
            fullWidth
            label={label}
            value={value}
            onChange={onChange}
            type={type}
            disabled={disabled}
            variant="outlined"
            margin="normal"
        />
    )
}

export default Input
