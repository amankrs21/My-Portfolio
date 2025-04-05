import { Grid, Container, Typography } from '@mui/material';

import projectData from './data.json';
import ProjectCards from './ProjectCards';

export default function Project({ mode }) {
    window.scrollTo(0, 0);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} my={3} justifyContent="center" alignItems="center">
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h3" textAlign='center'>
                        MY RECENT <strong style={{ color: '#0a66c2' }}>WORKS</strong>
                    </Typography>
                    <Typography variant="body1" textAlign='center' mt={1}>
                        Here are a few Projects I've worked on recently.
                    </Typography>
                </Grid>

                {projectData.map((project) => (
                    <Grid key={project.id} container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                        <ProjectCards
                            mode={mode}
                            title={project.title}
                            imgPath={project.img}
                            description={project.description}
                            ghLink={project.ghLink}
                            demoLink={project.link}
                        />
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}
