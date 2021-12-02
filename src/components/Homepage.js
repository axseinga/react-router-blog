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
            setPostsData(resp.results);
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
