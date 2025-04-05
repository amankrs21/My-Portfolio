import { Grid, Stack, Tooltip } from "@mui/material";
import { VscVscode } from "react-icons/vsc";
import {
    SiFedora, SiInsomnia, SiGithub, SiGithubcopilot, SiSonarcloud, SiCloudflare, SiGooglecolab, SiJupyter, SiOllama
} from "react-icons/si";

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
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Fedora Linux" sx={{ cursor: 'pointer' }}>
                        <SiFedora className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Visual Studio Code :)" sx={{ cursor: 'pointer' }}>
                        <VscVscode className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip title="Github" sx={{ cursor: 'pointer' }}>
                        <SiGithub className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Github-Copilot" sx={{ cursor: 'pointer' }}>
                        <SiGithubcopilot className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Ollama - LLMs locally" sx={{ cursor: 'pointer' }}>
                        <SiOllama className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Insomnia API Client" sx={{ cursor: 'pointer' }}>
                        <SiInsomnia className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="SonarCloud" sx={{ cursor: 'pointer' }}>
                        <SiSonarcloud className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Cloudflare Hosting" sx={{ cursor: 'pointer' }}>
                        <SiCloudflare className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Jupyter Notebook" sx={{ cursor: 'pointer' }}>
                        <SiJupyter className="tech-icons" />
                    </Tooltip>
                </Grid>
                <Grid size={{ md: 2.3, xs: 5 }}>
                    <Tooltip arrow title="Google Colab" sx={{ cursor: 'pointer' }}>
                        <SiGooglecolab className="tech-icons" />
                    </Tooltip>
                </Grid>
            </Grid>
        </Stack>
    );
}
