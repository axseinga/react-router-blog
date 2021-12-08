import styled from "styled-components";

const StyledPost = styled.article`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    padding: 1.5rem;
    border-right: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;

    & .post-title {
        font-family: "Dancing Script", cursive;
        font-size: 2rem;
        letter-spacing: 0.7rem;
        text-decoration: none;
        color: black;
    }

    & h4 {
        text-align: justify;
    }

    & p {
        padding: 1rem 0;
        line-height: 2.5rem;
        text-align: justify;
    }

    & ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
        width: 100%;

        & li {
            margin-left: 0.5rem;
        }
    }

    & img {
        width: 70%;
        height: auto;
        outline: 1px solid white;
        outline-offset: -4px;
    }

    & div {
        margin-top: 2rem;
        width: 100%;
        text-align: right;
    }

    & span {
        margin-right: 0.5rem;
    }

    & .post-tag {
        font-size: 1.3rem;
        color: darkblue;
        text-decoration: none;
        letter-spacing: 0.3rem;
        margin: 0 2rem;
    }

    & .post-link {
        font-family: "Dancing Script", cursive;
        font-size: 1.8rem;
        color: darkblue;
        text-decoration: none;
    }
`;

export default StyledPost;
