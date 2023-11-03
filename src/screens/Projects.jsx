import React from 'react';
import { Container } from "../components/Styles/Container/Container.styled" ;
import { ProjectsConta } from '../components/Styles/section/Projects.styled';

const Projects = () => {
    return (
        <Container>
            <ProjectsConta>
                <a href="https://kimtaesung-drum-sequencer.netlify.app/">
                    <img src="./img/DrumSequencer.png" alt="" />
                </a>
                <a href="https://kimtaesung-todolist.netlify.app/">
                    <img src="./img/ToDoList.png" alt="" />
                </a>
                </ProjectsConta>
        </Container>
    )
}

export default Projects