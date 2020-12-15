import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E63636;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LetterBox = styled.div`
    width: 70vw;
    height: 75vh;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    padding: 10px;
    font-family: 'Indie Flower', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;

    svg{
            transform: translateY(-100px)
    }
    div{
        width: 25vw;
        height: 55vh;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        justify-content: space-between;

        #msg{
            text-align:justify;
            transform: translateY(-15vh);
        
        }
        #rmt{
            text-align: right;
        }

     
    }

    @media (max-width: 800px){
        margin-top: 10px;
        width: 90vw;
        padding: 5px;
        font-size: 16px;
        div{
            width: 85vw;

        }
    }
`;

export const Loading = styled.div`
    background-color: #cc0404;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Indie Flower', cursive;
    
    p{
        color: #fff;
        font-size: 24px;
        letter-spacing: 4px;
    }

`;