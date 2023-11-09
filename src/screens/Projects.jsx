import React from 'react';
import { Container } from "../components/Styles/Container/Container.styled" ;
import { ProjectsConta } from '../components/Styles/section/Projects.styled';
import ProjectsSlider from '../components/Slider/ProjectsSlider';


    
    const Projects = () => {
    return (
        <Container>
            <ProjectsConta>
                <ProjectsSlider />
            </ProjectsConta>
        </Container>
    )
}

export default Projects