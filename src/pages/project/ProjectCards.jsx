import React from 'react';
import {
    Card, CardMedia, CardContent, Typography, Button, Box
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

export default function ProjectCards(props) {
    return (
        <Card sx={{ maxWidth: 345, padding: 1 }}>
            <CardMedia component="img" image={props.imgPath} alt="card-img" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                    {props.title}
                </Typography>
                <Typography mt={1} variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                    {props.description}
                </Typography>
                <Box mt={2} display="flex" justifyContent="center">
                    <Button variant="contained" href={props.ghLink} target="_blank">
                        <FacebookIcon /> &nbsp; Github
                    </Button>
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="contained"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <WebIcon /> &nbsp;
                            {"Demo"}
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
}
