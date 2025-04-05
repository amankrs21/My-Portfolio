import GitHubCalendar from "react-github-calendar";
import { Container, Grid, Typography } from '@mui/material';

import SkillSet from './SkillSet';
import ToolsUse from './ToolsUse';

export default function About({ mode }) {
    window.scrollTo(0, 0);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} mt={2} mb={2}>
                <Grid size={{ xs: 12, md: 8 }} className="about-intro">
                    <Typography variant="h3" textAlign="center">
                        KNOW WHO <strong style={{ color: '#0a66c2' }}> I AM </strong>
                    </Typography>

                    <Typography variant="h6" mt={2} p={2} sx={{ textAlign: 'justify' }}>
                        Hey! I'm <strong style={{ color: '#0a66c2' }}>Aman Singh</strong> from the heart of
                        <strong style={{ color: '#0a66c2' }}> India 🇮🇳</strong>.
                        I completed my BCA from
                        <strong style={{ color: '#0a66c2' }}> Parul University 🎓</strong> and am currently pursuing an MCA at
                        <strong style={{ color: '#0a66c2' }}> Sastra University 🚀</strong> — always learning and evolving.
                        <br /><br />
                        I’ve engineered automation tools at <strong style={{ color: '#0a66c2' }}>TCS</strong> that cut down dev effort, simplified deployments, and made life easier for both teams and clients — tech that just works, and works smart.
                        <br /><br />
                        Outside of tech, I’m all about movies 🎥, travel ✈️, and books 📚. I believe a balanced life fuels creative energy — both in code and beyond.
                        <br /><br />
                        I’m still learning, still building, and still chasing better — not just in tech 👨‍💻, but in who I become through it 🌱.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} className="about-logo" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        alt="home pic"
                        src="home-dev.svg"
                        style={{ maxHeight: '350px', width: '100%', objectFit: 'contain' }}
                    />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" my={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h6" color="primary" align="center">
                        "Code your path, debug your challenges 💻, and always remember: semicolons may break your code, but not your spirit. ✨"
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={6}>
                <Grid size={{ xs: 12, md: 10 }}>
                    <Typography variant="h3" align="center">
                        PROFESSIONAL <strong style={{ color: '#0a66c2' }}> SKILLSET </strong>
                    </Typography>
                    <SkillSet />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={6}>
                <Grid size={{ xs: 12, md: 10 }}>
                    <Typography variant="h3" align="center">
                        <strong style={{ color: '#0a66c2' }}>TOOLS </strong> I USE
                    </Typography>
                    <ToolsUse />
                </Grid>
            </Grid>

            <Grid container justifyContent="center" mt={6}>
                <Grid size={{ xs: 12 }}>
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
