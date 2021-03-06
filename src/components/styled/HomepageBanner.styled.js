import styled from "styled-components";

const StyledHomepageBanner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        font-family: "Dancing Script", cursive;
        font-size: 5rem;
        margin: 6rem 0;
    }

    & .nav-link {
        color: black;
        text-decoration: none;
    }

    & .active {
        color: black;
        text-decoration: none;
    }
`;

export default StyledHomepageBanner;
