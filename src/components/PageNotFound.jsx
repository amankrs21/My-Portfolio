import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PageNotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Typography variant="h3" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="h5" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            <Button component={Link} to="/" variant="contained">
                Go to Home
            </Button>
            <br />
            <img
                src="/PageNotFound.svg"
                alt="Page Not Found"
                width="40%"
                height="40%"
            />
        </div>
    );
}
