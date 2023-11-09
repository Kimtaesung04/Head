import React from 'react';
import { styled, keyframes } from 'styled-components';
import { Tooltip } from 'react-bootstrap';

const TitleAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
` 

const LeftCardAppear = keyframes`
    0% {
        opacity: 0;
        transform:translateX(-50px);
    }
    100% {
        opacity: 1;
        transform:translateX(0px);
    }
` 

const RightCardAppear = keyframes`
    0% {
        opacity: 0;
        transform:translateX(50px);
    }
    100% {
        opacity: 1;
        transform:translateX(0px);
    }
` 

export const AboutMeWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    margin-top:50px;
    padding-top:48px;
`

export const TechStackTooltip = styled(Tooltip)`
    & > .tooltip-inner {
        width:100%;
        background-color:rgba(80, 140, 170, 0.9);
        color:rgba(245, 245, 245, 1);
        font-size:10px;
        text-align:left;
        padding:15px 10px 5px 10px;
    }
    & > .tooltip-arrow::before {
        border-bottom-color:rgba(80, 140, 170, 0.9);
    }
`

export const AboutMeTextConta = styled.div`
    width:100%;
    display:flex;
    align-items:stretch;
    justify-content:center;
    padding:30px;
`

export const AboutMeTextDivContaFirst = styled.section`
    width:30%;
    margin-right:30px;
    animation:${ LeftCardAppear } 0.6s 0.2s both;
`

export const AboutMeTextDivContaSecond = styled.section`
    width:46%;
    margin-left:30px;
    display:flex;
    align-items:stretch;
    animation:${RightCardAppear} 0.6s 0.4s both;
`

export const AboutMeDivBox = styled.article`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    border-radius:10px;
    box-shadow: 0 3px 7px rgba(150, 150, 150, 0.9);
    padding:10px 20px;
    margin:30px 0;
    text-align:center;
    font-size:10px;
    & > strong {
        font-size:24px;
        letter-spacing:0.1px;
        color:rgba(0,120,255,0.8);
        font-family: 'SUITE-bold';
        font-weight:700;
        margin:10px 0;
    }
    & > span {
        display:flex;
        align-items:center;
        justify-content:space-around;
    }
    & > span > Button {
        box-sizing:border-box;
        width:18%;
        background:transparent;
        border:none;
        opacity: 0.5;
        transition:0.3s;
        cursor:pointer;
    }
    & > span > Button:hover {
        background:transparent;
        border:none;
        opacity: 1;
    }
    & > span > Button > img {
        width:100%;
    }
`

export const AboutMeHeadingDiv = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: 0;
    animation: ${TitleAppear} 0.6s both;  
` 

export const AboutMeHeadingStyle = styled.h2`
    background: linear-gradient(90deg, rgba(0,120,255,1) 0%, rgba(199,133,255,1) 50%, rgba(0,183,141,1) 100%);
    color:transparent;
    -webkit-background-clip:text;
    background-clip:text;
    font-family: 'NanumSquareNeo-Variable';
    font-size:50px;
    font-weight:700;
    line-height:60px;
    text-shadow:5px 5px 10px rgba(190, 190, 190, 0.8);
`

export const AboutMeText = styled.p`
    font-size:14px;
    letter-spacing:-0.5px;
    line-height:25px;
    color: rgba(20, 20, 20, 0.95);
    text-align:left;
    & > b {
        font-weight:500;
        font-size: 16px;
        line-height:25px;
        letter-spacing:0.1px;
    }
`