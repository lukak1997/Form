import { createGlobalStyle } from "styled-components";
import mobilephoto from './assets/images/bg-intro-mobile.png'


const GlobalStyles=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
};

body{
    background-image:url(${mobilephoto});
    width:100%;
    background-color: ${props => props.theme.colors.Red};
    background-repeat:no-repeat;
    display:flex;
    justify-content:center;  
    @media (min-width: 376px) {
        background-repeat:repeat;

   }
}
`

export default GlobalStyles