import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    //${reset};
    * {
        box-sizing: border-box;
        @import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');
        font-family: 'Sunflower', sans-serif;
    }
    body{
        background-color: ${props => props.theme.darkNavyColor};
        color: ${props => props.theme.whiteColor};
        font-size: 14px;
    }
    input:focus{
        outline: none;
    }
`;