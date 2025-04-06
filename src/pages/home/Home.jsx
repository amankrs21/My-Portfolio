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
                        I’m a developer who loves crafting practical and scalable software. From streamlining DevOps pipelines to experimenting with AI, I enjoy solving real-world problems with clean, efficient code.
                        <br /><br />
                        I'm proficient in stacks like
                        <strong style={{ color: "#0a66c2" }}> Python, MERN, MEAN, .NET</strong> and leverage platforms like <strong style={{ color: "#0a66c2" }}>AWS</strong> to deliver cloud-ready solutions. My interest in <strong style={{ color: "#0a66c2" }}>Generative AI</strong> pushes me to constantly innovate and learn.
                        <br /><br />
                        I believe in lifelong learning — from exploring new frameworks to optimizing cloud systems, I'm always leveling up.
                        <br /><br />
                        Currently working at <strong style={{ color: "#0a66c2" }}>Tata Consultancy Services</strong>, I enjoy building things with an engineer’s mindset and a creator’s heart.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} className="home-avatar">
                    <img src="avatar.svg" alt="avatar" style={{ width: "100%", maxWidth: 300 }} />
                </Grid>
            </Grid>

            {/* <Typography variant="h6" align="center" mt={6} color="text.secondary">
                Curious to see what I’ve built? Head over to the <strong style={{ color: "#0a66c2" }}>Projects</strong> section 🚀
            </Typography> */}

        </Container>
    );
}
