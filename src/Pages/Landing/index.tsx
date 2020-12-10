import React from 'react'
import { Container } from './styles'
import LandingImg from '../../assets/images/landing.svg'


const Landing = () => {
    return (
        <>
            <Container>
                <div>
                    <h1>Letter</h1>
                    <p>Poucas palavras espalham amor</p>
                    <a href="/">Escrever uma carta</a>
                </div>
                <img src={LandingImg} alt="" />

            </Container>

        </>
    );
}

export default Landing;
