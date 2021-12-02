import styled from "styled-components";

const StyledHomepageBanner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
        font-size: 2.5rem;
    }
    & div {
        display: flex;
        justify-content: space-evenly;
        width: 50%;

        & img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
    }
`;

export default StyledHomepageBanner;
