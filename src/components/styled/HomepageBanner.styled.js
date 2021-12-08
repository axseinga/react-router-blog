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
    & > div {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;

        & > div {
            display: flex;
            justify-content: space-evenly;
            width: 60%;
            align-items: flex-end;
        }

        & img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            outline: 1px solid white;
            outline-offset: -4px;
        }
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
