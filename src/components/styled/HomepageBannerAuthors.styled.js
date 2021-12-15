import styled from "styled-components";

const StyledHomepageBannerAuthors = styled.div`
    display: flex;
    width: 80%;
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
`;

export default StyledHomepageBannerAuthors;
