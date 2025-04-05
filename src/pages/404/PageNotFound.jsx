import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import PageNotFoundAnimation from "./PageNotFound.json";


// PageNotFound component
export default function PageNotFound() {

    return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Typography variant="h3">
                404 - Page Not Found
            </Typography>
            <Typography variant="h5" py={1}>
                The page you are looking for does not exist.
            </Typography>
            <Button variant="contained" component={Link} to="/" sx={{ marginY: "20px" }}>
                Go to Home
            </Button>
            <Lottie
                animationData={PageNotFoundAnimation}
                loop
                autoplay
                style={{ height: 300, width: 300, margin: "0 auto" }}
            />
        </div>
    );
}
