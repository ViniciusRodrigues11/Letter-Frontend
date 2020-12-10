import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-font-smooth: antialiased;
    }
    body{
        background: #fff;
       
    }
    body, input, button{
        font: 16px Roboto Mono, sans-serif;
    }
    #root{
        margin: 0 auto;
    }
    button{
        cursor: pointer;
    }
`;