import React, { useState, useEffect } from "react";
import fetchData from "../prismic-configuration";
import HomepageBanner from "./HomepageBanner";
import StyledHomepage from "./styled/Homepage.styled";
import PostsContainer from "./PostsContainer";

const Homepage = () => {
    const [doc, setDocData] = useState(null);
    const [posts, setPostsData] = useState(null);

    useEffect(() => {
        fetchData("page").then((resp) => {
            setDocData(resp.results[0]);
        });
        fetchData("post").then((resp) => {
            const sorted = resp.results.sort((a, b) => {
                a = a.data.date;
                b = b.data.date;
                return b > a ? 1 : b < a ? -1 : 0;
            });
            setPostsData(sorted);
        });
    }, []);

    return (
        <StyledHomepage>
            <HomepageBanner doc={doc} />
            {posts !== null && <PostsContainer posts={posts} />}
        </StyledHomepage>
    );
};

export default Homepage;
