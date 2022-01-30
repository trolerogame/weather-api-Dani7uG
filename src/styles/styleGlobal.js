import {createGlobalStyle} from 'styled-components'



export const StyleGlobal = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        width: 100%;
        height: 100vh;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    #root{
        width: 100%;
        height: 100vh;
        display:flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        #root{
            display: grid;
            grid-template-columns: 30% 70%;
            grid-template-rows: 1fr;
        }
    }
`