import styled from "styled-components";

const StyledSidebar = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 4rem;
    margin-top: 4rem;

    & .nav-link {
        color: pink;
        text-decoration: none;
        margin: 0.5rem 0;
    }

    & .unselected {
        color: black;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default StyledSidebar;
