import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    gap: 6px;
    flex-direction : column;
    margin-right: 30px;
    @media screen and (max-width: 490px) {
        flex-direction: row;
        margin-right: 0;
        margin-bottom: 30px;
    }
`


export default ButtonContainer;