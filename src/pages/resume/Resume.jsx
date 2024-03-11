import React, { useState, useEffect } from 'react';
import { Container, Grid, Button } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </Grid>
        </Container>
    )
}
