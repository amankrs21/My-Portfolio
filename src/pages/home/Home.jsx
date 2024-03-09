import './Home.css';
import React from 'react';
import {
    Box,
    Container, Grid, Typography
} from '@mui/material';
import Typewriter from "typewriter-effect";
import Lottie from 'react-lottie';
import WorkDev from './work-main.json';
// import Tilt from "react-parallax-tilt";

export default function HomeSection() {
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
            <Grid container my={5}>
                <Grid item md={7} pl={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h3" sx={{ pb: 2 }} className="heading">
                        Hi There!{' '}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </Typography>

                    <Typography variant="h3">
                        I'M
                        <strong style={{ color: '#0a66c2' }}> AMAN SINGH</strong>
                    </Typography>

                    <Typography variant="h4" color='primary' fontWeight={700} sx={{ mt: 6 }}>
                        <Typewriter
                            options={{
                                strings: [
                                    'Software Developer',
                                    'DevOps Engineer',
                                    'MERN Stack Developer',
                                    'Gen A.I. Developer',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </Typography>
                </Grid>

                <Grid item md={5}>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                    {/* <img
                        src="home-dev.svg"
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: '450px', width: '100%' }}
                    /> */}
                </Grid>
            </Grid>
            <Grid container mt={5} spacing={3}>
                <Grid item md={8}>
                    <Typography variant="h3" textAlign='center'>
                        LET ME <strong style={{ color: '#0a66c2' }}> INTRODUCE </strong> MYSELF
                    </Typography>
                    <Typography variant="h6" mt={4} p={3}>
                        I totally got hooked on programming, and hey, I've picked up a
                        thing or two, I guess... 🤷
                        <br /><br />
                        I am fluent in classics like
                        <i><strong style={{ color: '#0a66c2' }}> Python, React and Dotnet. </strong></i>
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
                <Grid container item md={4} sx={{ justifyContent: 'center' }}>
                    <img src="avatar.svg" alt="avatar" />
                    {/* <Tilt>
                        </Tilt> */}
                </Grid>
            </Grid>
            {/* <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            </Grid> */}
        </Container>
    );
}
