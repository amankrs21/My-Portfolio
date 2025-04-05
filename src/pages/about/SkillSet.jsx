import { Grid, Stack, Tooltip } from "@mui/material";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiNodejs, DiJava, DiDjango } from "react-icons/di";
import {
    SiDotnet, SiPostgresql, SiPandas, SiNumpy, SiScikitlearn, SiLangchain, SiTensorflow,
    SiPytorch, SiFlask, SiHuggingface, SiReact, SiMongodb, SiPython, SiAngular, SiGit
} from "react-icons/si";


// Techstack Component
export default function Techstack() {
    return (
        <Stack >
            <Grid
                mt={3}
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ paddingBottom: "50px" }}
            >
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Python">
                        <SiPython className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="JAVA" sx={{ cursor: 'pointer' }}>
                        <DiJava className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Dotnet" sx={{ cursor: 'pointer' }}>
                        <SiDotnet className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Amazon Web Service" sx={{ cursor: 'pointer' }}>
                        <FaAws className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Microsoft Azure" sx={{ cursor: 'pointer' }}>
                        <VscAzure className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="NodeJS" sx={{ cursor: 'pointer' }}>
                        <DiNodejs className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="ReactJS" sx={{ cursor: 'pointer' }}>
                        <SiReact className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Angular" sx={{ cursor: 'pointer' }}>
                        <SiAngular className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Django" sx={{ cursor: 'pointer' }}>
                        <DiDjango className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Flask" sx={{ cursor: 'pointer' }}>
                        <SiFlask className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Numpy" sx={{ cursor: 'pointer' }}>
                        <SiNumpy className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Pandas" sx={{ cursor: 'pointer' }}>
                        <SiPandas className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="SciKit-Learn" sx={{ cursor: 'pointer' }}>
                        <SiScikitlearn className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Tensorflow" sx={{ cursor: 'pointer' }}>
                        <SiTensorflow className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="PyTorch" sx={{ cursor: 'pointer' }}>
                        <SiPytorch className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="LangChain" sx={{ cursor: 'pointer' }}>
                        <SiLangchain className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="HuggingFace Transformers" sx={{ cursor: 'pointer' }}>
                        <SiHuggingface className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Git" sx={{ cursor: 'pointer' }}>
                        <SiGit className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Postgress" sx={{ cursor: 'pointer' }}>
                        <SiPostgresql className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="MongoDB" sx={{ cursor: 'pointer' }}>
                        <SiMongodb className="tech-icons" />
                    </Tooltip>
                </Grid>
            </Grid>
        </Stack>
    );
}
