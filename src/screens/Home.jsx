import React from 'react';
import { HomeTitleHedingDiv, HomeSubConta, HomeWrapper } from '../components/Styles/section/Home.styled';
import { Container } from '../components/Styles/Container/Container.styled';

const Home = () => {
    return (
        <Container>
            <HomeWrapper>
                <HomeSubConta>
                        <h2>I AM </h2>
                    </HomeSubConta>
                    <HomeTitleHedingDiv>
                        <h1>
                            Front-End Developer
                        </h1>
                    </HomeTitleHedingDiv>
                    <HomeSubConta>
                        <h2>TaeSung</h2>
                    </HomeSubConta>
                </HomeWrapper>
        </Container>
    )
}
export default Home