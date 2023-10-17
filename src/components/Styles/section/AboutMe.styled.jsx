import React from 'react';
import { styled } from 'styled-components';
import { Tooltip } from 'react-bootstrap';


export const TechStackTooltip = styled(Tooltip)`
    & > .tooltip-inner {
        background-color:rgba(80, 140, 170, 0.9);
        color:rgba(245, 245, 245, 1);
        font-size:10px;
        text-align:left;
        padding-top:15px;
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
    padding:10px;
`
export const AboutMeTextDivWrpperFirst = styled.div`
    width:30%;
    margin-right:30px;
`

export const AboutMeTextDivWrpperSecond = styled.div`
    width:46%;
    margin-left:30px;
    display:flex;
    align-items:stretch;
`
export const AboutMeDivBox = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    border-radius:10px;
    box-shadow:1px 1px 12px rgba(100, 100, 100, 0.9);
    padding:10px 20px;
    margin:30px 0;
    text-align:center;
    font-size:10px;
    & > strong {
        font-size:23px;
        letter-spacing:0.1px;
        color:rgba(0,120,255,0.8);
        font-family: 'SUITE-bold';
        font-weight:700;
        margin:10px 0;
    }
    & > span {
        display:flex;
        align-items:center;
        justify-content:space-around
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
export const AboutMeHeadingDiv = styled.div `
    width:35%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1em 0 1.2em 0;
` 
export const AboutMeHeadingStyle = styled.h2`
    background:linear-gradient(90deg, rgba(0,120,255,0.8) 0%, rgba(199,133,255,1) 50%, rgba(0,120,255,0.8) 100%);
    color:transparent;
    -webkit-background-clip:text;
    background-clip:text;
    font-family: 'NanumSquareNeo-Variable';
    font-size:40px;
    font-weight:700;
    line-height:60px;
`
export const AboutMeText = styled.p`
    font-size:14.5px;
    letter-spacing:-0.5px;
    line-height:20px;
    color: rgba(20, 20, 20, 0.95);
    text-align:left;
    & > b {
        font-weight:500;
        font-size: 16px;
        line-height:25px;
        letter-spacing:0.1px;
    }
`
