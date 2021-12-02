import React from "react";
import StyledAboutPage from "./styled/Aboutpage.styled";
import AboutAuthor from "./AboutAuthor";

const AboutPage = () => {
    return (
        <StyledAboutPage>
            <AboutAuthor />
            <AboutAuthor />
            <AboutAuthor />
        </StyledAboutPage>
    );
};

export default AboutPage;
