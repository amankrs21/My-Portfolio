import { Box } from '@mui/material';
import {
    Card, CardMedia, CardContent, Typography, Button
} from '@mui/material';
import { GitHub, RocketLaunch } from '@mui/icons-material';


// ProjectCards component
export default function ProjectCards(props) {
    return (
        <Card sx={{
            padding: 1,
            maxWidth: 345,
            bgcolor: props.mode === 'light' ? '#f2f2f2' : '#of1619',
        }}>
            <CardMedia component="img" image={props.imgPath} alt="card-img" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign='center'>
                    {props.title}
                </Typography>
                <Typography mt={1} variant="body2" color="text.secondary" style={{ textAlign: "justify" }}>
                    {props.description}
                </Typography>
                <Box mt={2} display="flex" justifyContent="center">
                    <Button variant="contained" href={props.ghLink} target="_blank" startIcon={<GitHub />}>
                        Github
                    </Button>
                    {props.demoLink && (
                        <Button
                            target="_blank"
                            variant="contained"
                            href={props.demoLink}
                            style={{ marginLeft: "10px" }}
                            startIcon={<RocketLaunch />}
                        >
                            Try It
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
}
