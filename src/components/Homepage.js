import React, { useState, useEffect } from "react";
import fetchData from "../prismic-configuration";
import HomepageBanner from "./HomepageBanner";
import StyledHomepage from "./styled/Homepage.styled";
import PostsContainer from "./PostsContainer";
import Sidebar from "./Sidebar";
import { HashRouter as Router } from "react-router-dom";

const Homepage = () => {
    const [doc, setDocData] = useState(null);
    const [posts, setPostsData] = useState(null);
    const [authors, setAuthorsData] = useState(null);
    const [slug, setSlug] = useState("");

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
        fetchData("categor").then((resp) => {
            setAuthorsData(resp.results[0].data.categories);
        });
    }, []);

    const getSlug = (uid) => {
        console.log(uid);
        setSlug(uid);
    };

    return (
        <Router>
            <StyledHomepage>
                <div>
                    <HomepageBanner
                        doc={doc}
                        authors={authors}
                    />
                    {posts !== null && (
                        <PostsContainer
                            posts={posts}
                            getSlug={getSlug}
                            slug={slug}
                        />
                    )}
                </div>
                {posts !== null && (
                    <Sidebar
                        posts={posts}
                    />
                )}
            </StyledHomepage>
        </Router>
    );
};

export default Homepage;
