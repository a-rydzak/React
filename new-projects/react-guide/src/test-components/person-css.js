// https://styled-components.com/ for interesting style componets
import styled from 'styled-components';

const StyledDiv = styled.div` 

    width:60%;
    margin: auto;
    box-shadow: grey;
    border: 4px solid black;
    text-align: center;

    @media (max-width: 500px){
        background-color: blueviolet;
    }
`
export default StyledDiv;
