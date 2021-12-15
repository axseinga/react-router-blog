import React, { useState, useEffect } from "react";
import StyledAboutPage from "./styled/Aboutpage.styled";
import AboutAuthor from "./AboutAuthor";
import fetchData from "../prismic-configuration";

const AboutPage = () => {
    const [authorsData, setAuthorsData] = useState(null);

    useEffect(() => {
        fetchData("author").then((resp) => {
            setAuthorsData(resp.results);
        });
    }, []);

    return (
        <StyledAboutPage>
            {authorsData &&
                authorsData.map((author) => (
                    <AboutAuthor key={author.id} props={author} />
                ))}
        </StyledAboutPage>
    );
};

export default AboutPage;
