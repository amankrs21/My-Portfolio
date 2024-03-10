import React from "react";
import { Grid, Stack, Tooltip } from "@mui/material";
import {
    SiVisualstudiocode, SiInsomnia, SiSlack, SiJetbrains, SiLinux,
} from "react-icons/si";

export default function ToolsUse() {
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
                <Tooltip title="Linux">
                    <Grid item xs={5} sm md>
                        <SiLinux className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="VS Code" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiVisualstudiocode className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Insomnia" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiInsomnia className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Slack" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiSlack className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Jet-Brains Tools" sx={{ cursor: 'pointer' }}>
                    <Grid item xs={5} sm md>
                        <SiJetbrains className="tech-icons" />
                    </Grid>
                </Tooltip>
            </Grid>
        </Stack>
    );
}
