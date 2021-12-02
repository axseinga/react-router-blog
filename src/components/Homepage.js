import React, { useState, useEffect } from "react";
import fetchData from "../prismic-configuration";
import HomepageBanner from "./HomepageBanner";
import StyledHomepage from "./styled/Homepage.styled";

const Homepage = () => {
    const [doc, setDocData] = useState(null);

    useEffect(() => {
        fetchData().then((resp) => {
            console.log(resp);
            setDocData(resp);
        });
    }, []);

    return (
        <StyledHomepage>
            <HomepageBanner doc={doc} />
            <div>This is going to be main page...</div>
        </StyledHomepage>
    );
};

export default Homepage;
