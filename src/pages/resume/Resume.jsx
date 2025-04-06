import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

import { Grid, Container, Button } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import pdf from './Resume.pdf';

export default function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="center">
                <Button
                    variant="contained"
                    color="primary"
                    href={pdf}
                    target="_blank"
                    sx={{ maxWidth: "250px" }}
                >
                    <SaveAltIcon />
                    &nbsp;Download CV
                </Button>
            </Grid>

            <Grid container justifyContent="center" my={5}>
                <Document file={pdf}>
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </Grid>
        </Container>
    );
}



