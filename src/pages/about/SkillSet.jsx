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
                mt={1}
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ paddingBottom: "50px" }}
            >
                <Tooltip title="Python">
                    <Grid item xs={5} sm md>
                        <DiPython className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="JAVA" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiJava className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Dotnet" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiDotnet className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="JavaScript" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiJavascript1 className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="AWS" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <FaAws className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Django" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiDjango className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Numpy" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiNumpy className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Pandas" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiPandas className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="SciKit-Learn" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiScikitlearn className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Postgress" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiPostgresql className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="NodeJS" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiNodejs className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="ReactJS" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <FaReact className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Angular" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiAngularSimple className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="MongoDB" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiMongodb className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Git" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiGit className="tech-icons" />
                    </Grid>
                </Tooltip>
            </Grid>
        </Stack>
    );
}
