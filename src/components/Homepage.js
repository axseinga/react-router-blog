import React, { useState, useEffect } from "react";
import fetchData from "../prismic-configuration";
import HomepageBanner from "./HomepageBanner";

const Homepage = () => {
    const [doc, setDocData] = useState(null);

    useEffect(() => {
        fetchData().then((resp) => {
            console.log(resp);
            setDocData(resp);
        });
    }, []);

    return (
        <>
            <HomepageBanner doc={doc} />
            <div>This is going to be main page...</div>
        </>
    );
};

export default Homepage;
