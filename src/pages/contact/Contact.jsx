import { useState } from 'react';
import Box from '@mui/material/Box';
import { Send } from '@mui/icons-material';
import {
    Container, Card, TextField, Button, Typography, Snackbar, Grid, Alert
} from '@mui/material';


// Contact component
export default function Contact() {

    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleClose = () => setSnackbar({ ...snackbar, open: false });

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        formData.append('user_id', import.meta.env.VITE_EMAILJS_USER_ID);
        formData.append('service_id', import.meta.env.VITE_EMAILJS_SERVICE_ID);
        formData.append('template_id', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSnackbar({ open: true, message: 'Your message has been sent!', severity: 'success' });
                e.target.reset();
            } else {
                const error = await response.json();
                setSnackbar({ open: true, message: `Failed to send: ${JSON.stringify(error)}`, severity: 'error' });
            }
        } catch (error) {
            setSnackbar({ open: true, message: `Network error: ${error.message}`, severity: 'error' });
        }
    };


    return (
        <Container maxWidth="md" sx={{ my: 4 }}>
            <Card raised sx={{ padding: 5, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" align="center">
                    Let's Connect
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Have a question, idea, or just want to say hi? I’d love to hear from you.
                </Typography>

                <Box required component="form" onSubmit={sendEmail} sx={{ width: '100%' }}>
                    <Grid container spacing={3} my={5}>
                        <Grid container size={{ xs: 12, md: 6 }}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    required
                                    fullWidth
                                    autoFocus
                                    label="Name"
                                    name="user_name"
                                    sx={{ height: '55px' }}
                                    placeholder='Enter your name'
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    required
                                    fullWidth
                                    type="email"
                                    label="Email"
                                    name="user_email"
                                    sx={{ height: '55px' }}
                                    placeholder='Enter your email'
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Subject"
                                    name="subject"
                                    sx={{ height: '55px' }}
                                    placeholder='Enter the subject'
                                />
                            </Grid>
                        </Grid>
                        <Grid container size={{ xs: 12, md: 6 }}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    rows={4}
                                    required
                                    multiline
                                    fullWidth
                                    name="message"
                                    label="Message"
                                    placeholder='Enter your message'
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} display="flex" justifyContent="center">
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    endIcon={<Send />}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Card>
        </Container >
    );
};
