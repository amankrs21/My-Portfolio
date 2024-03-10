import React from "react";
import { Grid, Stack, Tooltip } from "@mui/material";
import {
    DiJavascript1,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiAngularSimple,
    DiDjango,
} from "react-icons/di";
import { FaAws, FaReact } from "react-icons/fa";
import { SiDotnet, SiPostgresql, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

const iconStyle = {
    fontSize: "150px",
    maxWidth: "160px",
    minWidth: "100px",
    height: "100px",
    margin: "1px",
    padding: "10px",
    opacity: 0.9,
    borderRadius: "10px",
    border: "1.7px solid rgba(200, 137, 230, 0.637)",
    boxShadow: "4px 5px 4px 3px rgba(89, 4, 168, 0.137)",
};

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
                <Tooltip title="Python" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiPython style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="JAVA" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiJava style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Dotnet" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiDotnet style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="JavaScript" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiJavascript1 style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="AWS" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <FaAws style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Django" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiDjango style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Numpy" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiNumpy style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Pandas" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiPandas style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="SciKit-Learn" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiScikitlearn style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Postgress" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiPostgresql style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="NodeJS" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiNodejs style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="ReactJS" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <FaReact style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Angular" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiAngularSimple style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="MongoDB" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiMongodb style={iconStyle} />
                    </Grid>
                </Tooltip>
                <Tooltip title="Git" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <DiGit style={iconStyle} />
                    </Grid>
                </Tooltip>
            </Grid>
        </Stack>
    );
}
