import React from 'react';
import { styled, keyframes } from 'styled-components';

const subAppear = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`

const titleAppear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const HomeWrapper = styled.div`
    width:100%;
    height: 95%;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:space-around;
    border-left: 4px solid rgba(0,120,255,0.4);
    padding-left:40px;
    margin-top:50px;
    margin-left:70px;
`

export const HomeTitleHedingDiv = styled.div`
    width:60%;
    & > h1 {
        font-family: 'NanumSquareNeo-Variable';
        font-size:60px;
        background: linear-gradient(90deg, rgba(0,183,141,1) 0%, rgba(199,133,255,1) 50%, rgba(0,76,255,1) 100%);
        color:transparent;
        -webkit-background-clip:text;
        background-clip:text;
        text-shadow:5px 5px 10px rgba(190, 190, 190, 0.8);
        opacity: 0;
        animation: ${titleAppear} 3s 1s both;
    }
`

export const HomeSubConta = styled.div`
    width:100%;
    & > h2 {
        font-size:60px;
        font-weight:900;
        color:transparent;
        -webkit-text-stroke:1.5px rgba(0,183,141,1);
        text-stroke:1.5px rgba(0,183,141,1);
        opacity: 1;
        animation: ${subAppear} 3s; 
    }
`
