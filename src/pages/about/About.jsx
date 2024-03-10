import './About.css';
import React from 'react'
import {
    Container, Grid, Typography
} from '@mui/material';
import SkillSet from './SkillSet';
import ToolsUse from './ToolsUse';
import GitHubCalendar from "react-github-calendar";

export default function About() {
    return (
        <Container maxWidth='lg' sx={{ py: 1 }} id="home">
            <Grid container my={1}>
                <Grid item md={8} pl={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                        <strong style={{ color: '#0a66c2' }}> Geo Politics 🌍, Travelling ✈️ </strong> and
                        <strong style={{ color: '#0a66c2' }}> Reading Books 📚</strong>.
                        Always exploring new horizons! 🚀
                    </Typography>
                </Grid>
                <Grid container item md={4} sx={{ justifyContent: 'center' }}>
                    <img
                        src="home-dev.svg"
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: '450px', width: '100%' }}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" my={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" color="primary" align="center">
                        "Code your path, debug your challenges 💻, and always remember: semicolons may break your code, but not your spirit. ✨"
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" mt={6}>
                <Grid item xs={12} md={10}>
                    <Typography variant="h3" align="center">
                        PROFESSIONAL <strong style={{ color: '#0a66c2' }}> SKILLSET </strong>
                    </Typography>
                    <SkillSet />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" mt={6}>
                <Grid item xs={12} md={10}>
                    <Typography variant="h3" align="center">
                        <strong style={{ color: '#0a66c2' }}>TOOLS </strong> I USE
                    </Typography>
                    <ToolsUse />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" mt={5}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" align="center">
                        DAYS I <strong style={{ color: '#0a66c2' }}>CODE</strong>
                    </Typography>
                    <Grid container justifyContent="center" my={3}>
                        <GitHubCalendar
                            username="amankrs21"
                            blockSize={15}
                            blockMargin={5}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
