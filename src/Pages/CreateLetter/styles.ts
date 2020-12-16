import styled from 'styled-components';
import bg from '../../assets/images/bg.jpg'

export const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    flex: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 10vw;

    @media (max-width: 800px){
        
        height: 100%;
        padding: 10px 10px;
    }
`;

export const FormBox = styled.form`
    width: 40vw;
    min-height: 80vh;
    min-width: 350px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    h1{
        font-weight: 400;
        color: #E63636;
        font-size: 24px;
        margin-bottom: 40px;
    }

    input[type="submit"]{
        background-color: transparent;
        outline: none;
        border: none;
        color: #E63636;
        border-bottom: 1px solid #E63636;
        cursor: pointer;
        margin-top: 32px;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-top: 16px;


        label{
        margin-bottom: 2px;
        font-family: Roboto Mono;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #E63636;
    }

    

    input[type="text"]{
        width: 30vw;
        background: #F5F5F5;
        border: 1px solid #BBBBBB;
        box-sizing: border-box;
        border-radius: 5px;
        min-height: 48px;
        text-align: center;

       
       

        &::placeholder{
            font-family: Roboto Mono;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #C2C2C2;
        }

    }

    textarea{
        min-width: 30vw;
        max-width: 30vw;
        max-height: 25vh;
        background: #F5F5F5;
        border: 1px solid #BBBBBB;
        box-sizing: border-box;
        border-radius: 5px;
        min-height: 48px;
        text-align: left;
        height: 25vh;
        padding: 10px;
        font-size: 18px;

        &::placeholder{
            font-family: Roboto Mono;
            text-align: center;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #C2C2C2;
            transform: translateY(75px)
        }
    }
 
    }

    @media (max-width: 800px){
       
       width: 95vw;

        h1{
            font-size: 18px;
            margin-bottom: 10px;
        }
        div{
         input, textarea{
            width: 90vw;
            max-width: 90vw;
            min-width: 90vw;
            
         } 
         textarea::placeholder{
           transform: translateY(70px);
           font-size: 14px;
         }
         input::placeholder{
            font-size: 14px !important;
         }
        label{
            font-weight: 400;
            font-size: 16px;
        }
        }  
    }
`;

export const Preview = styled.div`
    width: 35vw;
    height: 75vh;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background:  #E63636;
    box-sizing: border-box;
    color: #fff;
    padding: 10px;
    font-family: 'Indie Flower', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;

    div{
        width: 25vw;
        height: 55vh;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        justify-content: space-between;

        #msg{
            text-align:justify;        
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

export const LetterLink = styled.div`
    max-width: 400px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        color: red;
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