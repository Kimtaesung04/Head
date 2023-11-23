import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectsSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: '0px',
    }
    return (
        <SliderContainer>
            <StyledSlider {...settings}>
            <ContentContainer>
                    <SliderContentDiv>
                    <ContentImgDiv>
                        <a href="./html/skinrx/skin.html">
                            <img src="./img/SkinHome.png" alt="" />
                        </a>
                    </ContentImgDiv>
                    <ContentTextDiv>
                        <h2>
                            SkinRx 사이트 리디자인
                        </h2>
                        <br />
                        <h3>
                            Tech Stack : HTML + CSS <br />
                            개인 프로젝트
                        </h3>
                        <p>
                            SkinRx 사이트를 퍼블리싱 작업한 프로젝트. <br />
                            기본적인 퍼블리싱에 대한 이해도를 쌓고 공부 할 수 있게 해준 프로젝트이다.
                        </p>
                        <br />
                        </ContentTextDiv>
                    </SliderContentDiv>
                </ContentContainer>
                <ContentContainer>
                    <SliderContentDiv>
                    <ContentImgDiv>
                        <a href="./html/delta/delta.html">
                            <img src="./img/DeltaHome.png" alt="" />
                        </a>
                    </ContentImgDiv>
                    <ContentTextDiv>
                        <h2>
                            델타항공 사이트 퍼블리싱
                        </h2>
                        <br />
                        <h3>
                            Tech Stack : HTML + CSS <br />
                            개인 프로젝트(반응형)
                        </h3>
                        <p>
                            델타항공 사이트를 클론코딩 하고 반응형 작업을 한 프로젝트. <br />
                            반응형웹과 웹 퍼블리싱에 대한 더 심도 있는 이해를 만들어 주었다.
                        </p>
                        <br />
                        </ContentTextDiv>
                    </SliderContentDiv>
                </ContentContainer>
                <ContentContainer>
                    <SliderContentDiv>
                    <ContentImgDiv>
                        <a href="./html/johnnie/johnnie.html">
                            <img src="./img/JohnnieHome.png" alt="" />
                        </a>
                    </ContentImgDiv>
                    <ContentTextDiv>
                        <h2>
                            조니워커 사이트 리디자인
                        </h2>
                        <br />
                        <h3>
                            Tech Stack : HTML + CSS <br />
                            개인 프로젝트(반응형)
                        </h3>
                        <p>
                            조니워커 사이트를 리디자인 하고 반응형 작업한 프로젝트. <br />
                            더 나은 사용자 경험을 위한 UI가 무엇인지 고민하고, 디자인적 요소에 대한 많은 고민을 통해
                            디자인과 퍼블리싱에 대해 더 깊은 이해도를 완성할 수 있었다.
                        </p>
                        <br />
                        </ContentTextDiv>
                    </SliderContentDiv>
                </ContentContainer>
                <ContentContainer>
                    <SliderContentDiv>
                        <ContentImgDiv>
                            <a href="https://kimtaesung-drum-sequencer.netlify.app/">
                                <img src="./img/DrumSequencer.png" alt="" />
                            </a>
                        </ContentImgDiv>
                        <ContentTextDiv>
                        <h1>
                            DrumSequencer
                        </h1>
                        <br />
                        <h3>
                            Tech Stack : React + SCSS <br />
                            개인 프로젝트
                        </h3>
                        <p>Web Audio API를 사용하여 사용자에게 색다른 경험을 안겨줄수 있다는 것을 보여주는 프로젝트. <br />
                            Class문법과 Component의 중요성에 대해 생각해보게 만들어주었다.
                        </p>
                        <br />
                        </ContentTextDiv>
                    </SliderContentDiv>
                </ContentContainer>
                <ContentContainer>
                    <SliderContentDiv>
                    <ContentImgDiv>
                        <a href="https://kimtaesung-todolist.netlify.app/">
                            <img src="./img/ToDoList.png" alt="" />
                        </a>
                    </ContentImgDiv>
                    <ContentTextDiv>
                        <h1>
                            ToDoList
                        </h1>
                        <br />
                        <h3>
                            Tech Stack : React + SCSS <br />
                            개인 프로젝트
                        </h3>
                        <p>React Hook과 Components의 사용을 경험해본 프로젝트. <br />
                            UseCallback과 UseState등 기본적인 React Hook의 사용법에 대해 고민하며 사용했다.
                        </p>
                        <br />
                        </ContentTextDiv>
                    </SliderContentDiv>
                </ContentContainer>
            </StyledSlider>
        </SliderContainer>
    )
}

export default ProjectsSlider;

const StyledSlider = styled(Slider)`
    width:70vw;
    display:flex;
    align-items:center;
    justify-content: center;
    padding-top:20px;
    .slick-slide {
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .slick-prev:before, .slick-next:before {
        color:rgba(0,120,255,0.8);
        transition:0.8s;
    }
`


const SliderContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
const SliderContentDiv = styled.div `
    width:100%;
    display:flex;
    align-items: center;
    justify-content:space-around;
`
const ContentImgDiv = styled.div`
    width:55%;
    box-shadow: 0 4px 8px rgba(150, 150, 150, 0.9);
    border-radius:20px;
    overflow:hidden;
    & > a > img {
        width: 100%;
        object-fit:cover;
    }
`
const ContentTextDiv = styled.div`
    width:35%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-start;
    & > h1 {
        color:rgba(0,120,255,0.8);
        font-size: 32px;
        font-weight:700;
        line-height: 50px;
    }
    & > h2 {
        color:rgba(0,120,255,0.8);
        font-size: 28px;
        font-weight:700;
        line-height: 50px;
    }
    & > h3 {
        font-size: 18px;
        font-weight:700;
        line-height: 30px;
    }
    & > p {
        font-size: 12px;
    }
`

