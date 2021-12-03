import styled from "styled-components";

const StyledAboutAuthor = styled.article`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    padding: 1.5rem;
    border-right: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;

    & h2 {
        font-size: 3rem;
        letter-spacing: 0.7rem;
        font-family: "Dancing Script", cursive;
    }

    & p {
        padding: 1rem 0;
        line-height: 2.5rem;
        text-align: justify;
    }

    & div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        & .nav_link {
            &:link,
            &:active,
            &:visited {
                font-size: 2rem;
                font-family: "Dancing Script", cursive;
                text-decoration: none;
                color: black;
            }

            &:hover {
                animation: pulse-black 1s infinite;
            }
        }

        & img {
            width: 30%;
            height: auto;
            outline: 1px solid white;
            outline-offset: -4px;
        }
    }

    @keyframes pulse-black {
        0% {
            transform: scale(0.95);
        }

        70% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.95);
        }
    }
`;

export default StyledAboutAuthor;
