import './Home.css';
import React from 'react';

import Grid from '@mui/material/Grid2';
import { Container, Grid2, Typography } from '@mui/material';
import Typewriter from "typewriter-effect";

import Lottie from 'react-lottie';
import WorkDev from './work.json';

function Home() {
    window.scrollTo(0, 0);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: WorkDev,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Container maxWidth='lg' sx={{ py: 5, backgroundImage: 'home-bg.jpg' }} id="home">
            <Grid2 container mt={3} mb={15}>
                <Grid size={{ md: 7, pl: 2 }} className="home-autopart">
                    <Typography variant="h3" sx={{ pb: 2 }} className="heading">
                        Hi There!{' '}
                        <span className="home-wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </Typography>

                    <Typography variant="h3">
                        I'M
                        <strong style={{ color: '#0a66c2' }}> AMAN SINGH</strong>
                    </Typography>

                    <Typography variant="h4" gutterBottom color='primary' fontWeight={500} sx={{ mt: 6 }}>
                        <Typewriter
                            options={{
                                strings: [
                                    'DevOps Engineer @ TCS 🚀',
                                    'Full-time Software Developer 💻',
                                    'Genrative AI Enthusiast 🤖',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </Typography>
                </Grid>

                <Grid size={{ md: 5 }} className='home-lotties'>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </Grid>
            </Grid2>

            <Grid2 container mt={5} spacing={3}>
                <Grid size={{ md: 8 }}>
                    <Typography variant="h3" textAlign='center'>
                        LET ME <strong style={{ color: '#0a66c2' }}> INTRODUCE </strong> MYSELF
                    </Typography>
                    <Typography variant="h6" mt={4} p={3}>
                        I totally got hooked on programming, and hey, I've picked up a
                        thing or two, I guess... 🤷
                        <br /><br />
                        I excel in classics like
                        <i><strong style={{ color: '#0a66c2' }}> Python 🐍, React ⚛️, and Dotnet 🖥️, </strong></i>
                        always ready to innovate and simplify the digital world 🌎.
                        <br /><br />
                        My field of Interest's are building new &nbsp;
                        <i><strong style={{ color: '#0a66c2' }}>Web Technologies </strong></i>
                        and also in areas related to{" "}
                        <i><strong style={{ color: '#0a66c2' }}>Genrative AI.</strong></i>
                        <br /><br />
                        Whenever I got chance to learn something new, I never missed it. I
                        love learning new things, and I am currently diving deeper into
                        <strong style={{ color: '#0a66c2' }}> Angular</strong> and
                        <strong style={{ color: '#0a66c2' }}> AWS Cloud Enginnering.</strong>
                    </Typography>
                </Grid>
                <Grid2 size={{ md: 4 }} className='home-avatar'>
                    <img src="avatar.svg" alt="avatar" />
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Home;