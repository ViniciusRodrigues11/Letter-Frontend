import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E63636;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        margin-right: 80px;
    }

    h1{
        font-size: 40px;
        color: #fff;
    }

    p{
        color: #fff;
        font-size: 22px;
    }

    a{
        font-size: 18px;
        padding: 1px 5px; 
        outline: none;
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
        position: relative;
        bottom: -20vh;
        text-decoration: none;
        transition: all 0.6s;
    }

    img{
        width: 400px;
    }

    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
        justify-content: space-around;

        div{
            align-items: center;
            justify-content: center;
            margin: 0;
            text-align: center;
        }

        a{
            bottom: -20px;
        }
        

        img{
            width: 250px;
        }
    }

`;

