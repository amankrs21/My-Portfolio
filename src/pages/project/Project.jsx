import { Grid, Container, Typography } from '@mui/material';

import ProjectCards from './ProjectCards';

export default function Project({ mode }) {
    window.scrollTo(0, 0);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} my={3} justifyContent="center" alignItems="center">
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h3" textAlign='center'>
                        MY RECENT <strong style={{ color: '#0a66c2' }}>WORKS</strong>
                    </Typography>
                    <Typography variant="body1" textAlign='center' mt={1}>
                        Here are a few Projects I've worked on recently.
                    </Typography>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="MERN Todo"
                        imgPath="project/TodoMern.png"
                        description="Leverages the power of the MERN stack to provide a robust and secure platform for managing todo lists. It features JWT authentication for secure access and protected routes to ensure that only authenticated users can access certain functionalities."
                        ghLink="https://github.com/amankrs21/TodoMern"
                        demoLink="https://todomern.pages.dev/"
                    />
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Todo React Django"
                        imgPath="project/TodoReactDjango.png"
                        description="Built on React and Django, utilizes JWT Authentication and Material UI for a seamless user experience. Users can manage tasks efficiently, leveraging React's dynamic frontend and Django's robust backend. MUI enhances the application's aesthetic appeal and usability."
                        ghLink="https://github.com/amankrs21/TodoReactDjango"
                    />
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Todo Angular Dotnet"
                        imgPath="project/TodoAngularNet.png"
                        description="Todo application built using Angular for the frontend and Dotnet C# for the backend. It provides full CRUD functionality for managing your tasks. Additionally, the application includes user authentication using JWT Tokens, allowing secure access to todo operations."
                        ghLink="https://github.com/amankrs21/TodoAngularNet"
                    />
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Finance"
                        imgPath="project/Finance.png"
                        description="This project is a web application developed using React for the frontend and Django for the backend. It provides features such as user authentication, blog management, about, contact, and portfolio pages with interactive graphs, and supports Payment Gateway integration."
                        ghLink="https://github.com/amankrs21/FinanceReactDjango"
                    />
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="React Expreiment's"
                        imgPath="project/ReactExperiments.png"
                        description="React Experiments showcase Password Validation, Calculator, BMI Calculator, Weather App, and Todo lists. Each highlights React's prowess in interactive UIs. From secure password handling to weather forecasting, these experiments exhibit React's versatility in various functionalities."
                        ghLink="https://github.com/amankrs21/reactexperiments"
                        demoLink="https://reactexperiments.pages.dev/"
                    />
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Angular Todo"
                        imgPath="project/AngularTodo.png"
                        description="Sleek single-page application allowing users to create and manage todos. Leveraging Angular, it seamlessly saves todo entries in local storage, ensuring data persistence. An efficient and user-friendly solution for organizing tasks with a seamless user experience."
                        ghLink="https://github.com/amankrs21/AngularTodo"
                        demoLink="https://angulartodo.pages.dev/"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
