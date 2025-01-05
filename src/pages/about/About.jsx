import './About.css';
import React from 'react';
import Grid from '@mui/material/Grid2';
import {
    Container, Typography
} from '@mui/material';
import SkillSet from './SkillSet';
import ToolsUse from './ToolsUse';
import GitHubCalendar from "react-github-calendar";

export default function About({ mode }) {
    window.scrollTo(0, 0);

    return (
        <Container maxWidth='lg' sx={{ py: 1 }} id="home">
            <Grid container mt={2} mb={3}>
                <Grid size={{ md: 8 }} className='about-intro'>
                    <Typography variant="h3" textAlign='center'>
                        KNOW WHO <strong style={{ color: '#0a66c2' }}> I'M </strong>
                    </Typography>
                    <Typography variant="h6" mt={4} p={3}>
                        Hey there! I'm <strong style={{ color: '#0a66c2' }}>Aman Singh</strong> from the lively <strong style={{ color: '#0a66c2' }}>Vaishali, Bihar </strong>🌟.
                        <br />
                        Passion drives me as a Software Developer 👨‍💻, and I'm currently bringing ideas to life at
                        <strong style={{ color: '#0a66c2' }}> Tata Consultancy Services.</strong>
                        <br /><br />
                        Just finished my Bachelor's in Computer Application (BCA) at
                        <strong style={{ color: '#0a66c2' }}> Parul University 🎓 </strong>
                        and now, I'm diving deeper into tech with my Master's in Computer Application (MCA) at
                        <strong style={{ color: '#0a66c2' }}> Sastra University 🚀.</strong><br />
                        Always learning, always growing! 🌱
                        <br /><br />
                        Besides coding, I'm also passionate about,
                        <strong style={{ color: '#0a66c2' }}> Geo Politics 🌍, Travelling ✈️, Watching Movies 🎥 </strong> and
                        <strong style={{ color: '#0a66c2' }}> Reading Books 📚</strong>.
                        Always exploring new horizons! 🚀
                    </Typography>
                </Grid>
                <Grid size={{ md: 4 }} className='about-logo'>
                    <img
                        src="home-dev.svg"
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: '350px', width: '100%' }}
                    />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" my={2}>
                <Grid size={{ md: 8, xs: 12 }}>
                    <Typography variant="h6" color="primary" align="center">
                        "Code your path, debug your challenges 💻, and always remember: semicolons may break your code, but not your spirit. ✨"
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={6}>
                <Grid size={{ md: 10, xs: 12 }}>
                    <Typography variant="h3" align="center">
                        PROFESSIONAL <strong style={{ color: '#0a66c2' }}> SKILLSET </strong>
                    </Typography>
                    <SkillSet />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={6}>
                <Grid size={{ md: 10, xs: 12 }}>
                    <Typography variant="h3" align="center">
                        <strong style={{ color: '#0a66c2' }}>TOOLS </strong> I USE
                    </Typography>
                    <ToolsUse />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={5}>
                <Grid size={{ md: 12, xs: 12 }}>
                    <Typography variant="h3" align="center">
                        DAYS I <strong style={{ color: '#0a66c2' }}>CODE</strong>
                    </Typography>
                    <Grid container justifyContent="center" my={3}>
                        <GitHubCalendar
                            username="amankrs21"
                            blockSize={15}
                            blockMargin={5}
                            colorScheme={mode === 'light' ? 'light' : 'dark'}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
