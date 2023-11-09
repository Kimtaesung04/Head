import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
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
                            <a href="https://kimtaesung-drum-sequencer.netlify.app/">
                                <img src="./img/DrumSequencer.png" alt="" />
                            </a>
                        </ContentImgDiv>
                        <ContentTextDiv>
                        <h2>
                            DrumSequencer
                        </h2>
                        <br />
                        <h3>
                            Tech Stack : React + SCSS <br />
                            개인 프로젝트
                        </h3>
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
                        <h2>
                            ToDoList
                        </h2>
                        <br />
                        <h3>
                            Tech Stack : React + SCSS <br />
                            개인 프로젝트
                        </h3>
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
    & > h2 {
        color:rgba(0,120,255,0.8);
        font-size: 36px;
        font-weight:700;
        line-height: 50px;
    }
    & > h3 {
        font-size: 20px;
        font-weight:700;
        line-height: 40px;
    }
`

