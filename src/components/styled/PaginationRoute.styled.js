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
                text-decoration: underline;
            }

            & .unselected {
                text-decoration: none;
                color: black;
            }
        }
    }
`;

export default StyledPaginationRoute;
