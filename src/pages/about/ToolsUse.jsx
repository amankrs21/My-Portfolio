import React from "react";
import Grid from '@mui/material/Grid';
import { Stack, Tooltip } from "@mui/material";
import {
    SiInsomnia, SiSlack, SiJetbrains, SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function ToolsUse() {
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
                <Tooltip title="Linux">
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiLinux className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="VS Code" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <VscVscode className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Insomnia" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiInsomnia className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Slack" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiSlack className="tech-icons" />
                    </Grid>
                </Tooltip>
                <Tooltip title="Jet-Brains Tools" sx={{ cursor: 'pointer' }}>
                    <Grid size={{ md: 2.3, xs: 5 }}>
                        <SiJetbrains className="tech-icons" />
                    </Grid>
                </Tooltip>
            </Grid>
        </Stack>
    );
}
