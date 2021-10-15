import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        /* #dffe1c #fdf9f0 #000000 */
        background-color: #fdf9f0;
        font-family: 'Chivo', sans-serif;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    h4 {
        font-family: 'Archivo Narrow', sans-serif;
    }
`

export default GlobalStyle