// import { Container, Grid, Typography } from '@mui/material';
// import React from 'react';
// import ProjectCards from './ProjectCards';

// export default function Project() {
//     return (
//         <Container maxWidth="lg">
//             <Grid container spacing={3} my={3}>
//                 <Grid item xs={12}>
//                     <Typography variant="h3" textAlign='center'>
//                         MY RECENT <strong style={{ color: '#0a66c2' }}> WORKS </strong>
//                     </Typography>
//                     <Typography variant="body2" textAlign='center' my={1}>
//                         Here are few Projects I've worked on recently.
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
//                     <ProjectCards
//                         title="Angular Todo"
//                         imgPath="project/AngularTodo.png"
//                         description="Sleek single-page application allowing users to create and manage todos. Leveraging Angular, it seamlessly saves todo entries in local storage, ensuring data persistence. An efficient and user-friendly solution for organizing tasks with a seamless user experience."
//                         ghLink="https://github.com/amankrs21/AngularTodo"
//                         demoLink="https://angulartodo.pages.dev/"
//                     />
//                 </Grid>
//             </Grid>
//         </Container>
//     )
// }

import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCards from './ProjectCards';

export default function Project({ mode }) {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} my={3} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h3" textAlign='center'>
                        MY RECENT <strong style={{ color: '#0a66c2' }}>WORKS</strong>
                    </Typography>
                    <Typography variant="body2" textAlign='center' my={1}>
                        Here are a few Projects I've worked on recently.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Angular Todo"
                        imgPath="project/AngularTodo.png"
                        description="Sleek single-page application allowing users to create and manage todos. Leveraging Angular, it seamlessly saves todo entries in local storage, ensuring data persistence. An efficient and user-friendly solution for organizing tasks with a seamless user experience."
                        ghLink="https://github.com/amankrs21/AngularTodo"
                        demoLink="https://angulartodo.pages.dev/"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Angular Todo"
                        imgPath="project/AngularTodo.png"
                        description="Sleek single-page application allowing users to create and manage todos. Leveraging Angular, it seamlessly saves todo entries in local storage, ensuring data persistence. An efficient and user-friendly solution for organizing tasks with a seamless user experience."
                        ghLink="https://github.com/amankrs21/AngularTodo"
                        demoLink="https://angulartodo.pages.dev/"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    <ProjectCards
                        mode={mode}
                        title="Angular Todo"
                        imgPath="project/AngularTodo.png"
                        description="Sleek single-page application allowing users to create and manage todos. Leveraging Angular, it seamlessly saves todo entries in local storage, ensuring data persistence. An efficient and user-friendly solution for organizing tasks with a seamless user experience."
                        ghLink="https://github.com/amankrs21/AngularTodo"
                        demoLink="https://angulartodo.pages.dev/"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
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
