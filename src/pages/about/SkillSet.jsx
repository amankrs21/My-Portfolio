import React from "react";
import { Grid, Stack, Tooltip } from "@mui/material";
import {
    DiJavascript1, DiNodejs, DiMongodb, DiPython, DiGit,
    DiJava, DiAngularSimple, DiDjango
} from "react-icons/di";
import {
    SiDotnet, SiPostgresql, SiPandas, SiNumpy, SiScikitlearn
} from "react-icons/si";
import { FaAws, FaReact } from "react-icons/fa";

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
                <Tooltip title="Python">
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiPython className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="JAVA" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiJava className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Dotnet" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiDotnet className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="JavaScript" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiJavascript1 className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="AWS" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <FaAws className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Django" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiDjango className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Numpy" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiNumpy className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Pandas" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiPandas className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="SciKit-Learn" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiScikitlearn className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Postgress" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiPostgresql className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="NodeJS" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiNodejs className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="ReactJS" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <FaReact className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Angular" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiAngularSimple className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="MongoDB" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiMongodb className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Git" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <DiGit className="tech-icons" />
                    </Grid>
                </Tooltip>
            </Grid>
        </Stack>
    );
}
