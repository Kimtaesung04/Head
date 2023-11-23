import React from 'react';
import { Container } from '../components/Styles/Container/Container.styled';
import { AboutMeDivBox, AboutMeTextConta, AboutMeHeadingDiv, AboutMeHeadingStyle, AboutMeText, AboutMeTextDivContaFirst, AboutMeTextDivContaSecond, TechStackTooltip, AboutMeWrapper  } from '../components/Styles/section/AboutMe.styled';
import { Button, OverlayTrigger } from 'react-bootstrap';

const AboutMe = () => {

    return (
        <Container>
            <AboutMeWrapper>
                <AboutMeHeadingDiv>
                <AboutMeHeadingStyle>
                    Change, Move forward
                </AboutMeHeadingStyle>
                </AboutMeHeadingDiv>
                <AboutMeTextConta>
                    <AboutMeTextDivContaFirst>
                        <AboutMeDivBox>
                        <strong>Profile</strong>
                            <AboutMeText>
                            <b>이름 : 김태성</b> <br />
                            <b>나이 : 25세(1998년생)</b> <br />
                            <b>직업군 : Web Developer</b> <br />
                            <b>취미 : 운동(헬스 및 다양한 체육활동)</b>
                            </AboutMeText>
                        </AboutMeDivBox>
                        <AboutMeDivBox>
                        <strong>Tech Stack</strong>
                            <span>
                                <OverlayTrigger trigger={['hover', 'focus']}  delay={ { show : 250,  hide : 150 } } placement='bottom' overlay={
                                    <TechStackTooltip>
                                        <p>
                                            마크업 언어인 HTML5를 사용할 수 있습니다.
                                            SEO와 웹접근성을 최적화 하고 코드의 가독성을 높이기 위해 
                                            시맨틱 마크업을 중요하게 생각하며 작업합니다
                                        </p>
                                    </TechStackTooltip>
                                }>
                                    <Button variant='link'>
                                        <img src="/img/html5Icon.png" alt="" />
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger={['hover', 'focus']} delay={ { show : 250,  hide : 150 } }  placement='bottom' overlay={
                                    <TechStackTooltip>
                                        <p>
                                            스타일시트인 CSS3와 SCSS전처리기의 사용이 가능합니다.
                                            CSS3의 기능을 충분히 사용할 수 있으며, SCSS의 기본적인 사용이 가능하고
                                            추가되는 새로운 기능들을 공부하고 있습니다.
                                        </p>
                                    </TechStackTooltip>
                                }>
                                    <Button variant='link'>
                                        <img src="/img/css3Icon.png" alt="" />
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger={['hover', 'focus']} delay={ { show : 250,  hide : 150 } } placement='bottom' overlay={
                                    <TechStackTooltip>
                                        <p>
                                            기본적인 바닐라JS의 문법을 이해하고 사용할 수 있습니다.
                                            처음보는 문법들과 라이브러리들을 문제없이 공부해보고
                                            프로젝트에 사용 할 수 있을 만큼 JS를 이해하고 있습니다.
                                        </p>
                                    </TechStackTooltip>
                                }>
                                    <Button variant='link'>
                                        <img src="/img/javascriptIcon.png" alt="" />
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger={['hover', 'focus']} delay={ { show : 250,  hide : 150 } } placement='bottom' overlay={
                                    <TechStackTooltip>
                                        <p>
                                            React에 대한 이해와 사용법이 숙지가 충분히 되어있습니다.
                                            React Hook과 React Router의 사용법에 대한 이해가 되어있어 SPA 를 
                                            만들어내는데 문제가 없습니다.
                                        </p>
                                    </TechStackTooltip>
                                    }>
                                        <Button variant='link'>
                                            <img src="/img/reactIcon.png" alt="" />
                                        </Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger={['hover', 'focus']} delay={ { show : 250,  hide : 150 } } placement='bottom' overlay={
                                    <TechStackTooltip>
                                        <p>
                                            부트스트랩5 의 사용이 가능합니다.
                                            부트스트랩의 컴포넌트를 불러와 사용하는 것이 가능하고,
                                            컴포넌트를 수정, 변형해서 저만의 스타일로 만들어 사용할 수있습니다.
                                        </p>
                                    </TechStackTooltip>
                                }>
                                    <Button variant='link'>
                                        <img src="/img/bootstrapIcon.png" alt="" />
                                    </Button>
                                </OverlayTrigger>
                            </span>
                        </AboutMeDivBox>
                    </AboutMeTextDivContaFirst>
                    <AboutMeTextDivContaSecond>
                        <AboutMeDivBox className='TextAlign'>
                        <strong>"변화하고 나아가는 웹 개발자"</strong>
                            <AboutMeText>
                            저는 HTML과 CSS(SCSS), JavaScript 와 React.js를 다룰수 있으며 Next.js, TypeScript 등 더 많은 프레임워크와 라이브러리를 다룰수 있도록 성장할 준비가 되어있습니다. 
                            빠르게 변화하는 웹개발 시장에 발맞춰 계속해서 변화하며 나아가 웹개발분야 전체에 도움이 되는 개발자가 될 것입니다.
                            <br />
                            <br />
                            저는 동료들과 원활하게 소통하고, 항상 경청하고 열린 자세로 받아들일 준비가 되어있습니다. 언제나 변화하고 성장해 나가는 동료가 되겠습니다.
                            </AboutMeText>
                        </AboutMeDivBox>
                    </AboutMeTextDivContaSecond>
                </AboutMeTextConta>
            </AboutMeWrapper>
        </Container>
    )
}

export default AboutMe