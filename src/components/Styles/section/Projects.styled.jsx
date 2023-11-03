import React from 'react';
import styled from 'styled-components';

export const ProjectsConta = styled.section`
    width: 90%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    & > a {
        display:flex;
        align-items:center;
        justify-content:space-around;
        width:30vw;
        height:50vh;
        object-fit:cover;
    }
    & > a > img {
        width:100%;
        
    }
`