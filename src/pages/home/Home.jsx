import Lottie from "lottie-react";
import { Container, Grid, Typography } from "@mui/material";

import HomeAnimation from "./Home.json";
import TypewriterEffect from "../../components/TypewriterEffect";


// Home Component
export default function Home() {
    window.scrollTo(0, 0);

    return (
        <Container maxWidth="lg" sx={{ py: 5, backgroundImage: 'url(/home-bg.jpg)', backgroundSize: 'cover' }}>
            <Grid container spacing={4} alignItems="center" mt={2} mb={13}>
                <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 2 } }}>
                    <Typography variant="h3" sx={{ pb: 2 }}>
                        Hi There!{" "}
                        <span className="home-wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </Typography>

                    <Typography variant="h3" gutterBottom>
                        I'M
                        <strong style={{ color: "#0a66c2" }}> AMAN SINGH</strong>
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="h4"
                        color="primary"
                        fontWeight={500}
                        sx={{ mt: 4, height: "30px" }}
                    >
                        <TypewriterEffect
                            strings={[
                                "DevOps Engineer @ TCS 🚀",
                                "Generative AI Enthusiast 🤖",
                                "Full-stack Developer 💻",
                            ]}
                            delay={50}
                            deleteSpeed={20}
                        />
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }} className="home-lotties">
                    <Lottie
                        animationData={HomeAnimation}
                        loop
                        autoplay
                        style={{ height: 400, width: 400 }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={4} mt={6}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h3" textAlign="center" gutterBottom>
                        LET ME <strong style={{ color: "#0a66c2" }}> INTRODUCE </strong> MYSELF
                    </Typography>

                    <Typography variant="h6" mt={3} px={2}>
                        I'm a passionate software developer with a deep love for building robust, scalable, and elegant digital solutions. From automating workflows to engineering AI-powered tools, I thrive in solving real-world problems with clean code and sharp design.
                        <br /><br />
                        Skilled in
                        <strong style={{ color: "#0a66c2" }}> Python, Data Science, GEN AI, MERN, MEAN, .Net, and AWS</strong>, I'm constantly pushing boundaries — blending DevOps engineering with Generative AI to craft impactful products.
                        <br /><br />
                        I believe in continuous learning and growth. Whether it's diving into new frameworks, refining articulation, or optimizing cloud infrastructure — I take pride in staying curious and leveling up.
                        <br /><br />
                        Currently working at <strong style={{ color: "#0a66c2" }}>Tata Consultancy Services</strong>, I enjoy building things with an engineer’s mindset and a creator’s heart.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} className="home-avatar">
                    <img src="avatar.svg" alt="avatar" style={{ width: "100%", maxWidth: 300 }} />
                </Grid>
            </Grid>
        </Container>
    );
}
