import styled from "styled-components";

const StyledPaginationRoute = styled.div`
    & > ul {
        display: flex;
        list-style: none;
        justify-content: center;
        font-size: 1.5rem;

        & li {
            margin: 0 1rem;
            text-decoration: none;
            font-family: "Dancing Script", cursive;

            & .nav-link {
                color: black;
                text-decoration: none;
                margin: 0.5rem 0;
            }

            & .active {
                text-decoration: underline;
                border: 1px solid black;
                border-radius: 50%;
                padding: 0.5rem;
            }
        }
    }
`;

export default StyledPaginationRoute;
