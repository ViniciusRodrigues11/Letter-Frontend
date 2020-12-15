import React from 'react'
import { Container } from './styles'
import LandingImg from '../../assets/images/landing.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <Container>
                <div>
                    <h1>Letter</h1>
                    <p>Palavras que espalham amor</p>
                    <Link to="/create">Escrever uma carta</Link>
                </div>
                <img src={LandingImg} alt="letter" />
            </Container>
        </>
    );
}

export default Landing;
