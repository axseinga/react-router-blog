import React from "react";
import PostsAll from "./PostsAll";
import PostsByAuthor from "./PostsByAuthor";
import { Route, useParams } from "react-router";
import AboutPage from "./Aboutpage";
import PostsByTag from "./PostsByTag";

const PostsContainer = (props) => {
    const { posts, author, tag } = props;
    const { name } = useParams();
    const { currentTag } = useParams();
    return (
        <>
            <Route exact path="/">
                <PostsAll posts={posts} />
            </Route>
            <Route exact path="/about-us">
                <AboutPage />
            </Route>
            <Route exact path="/posts-by-:name">
                <PostsByAuthor posts={posts} author={author} />
            </Route>
            <Route exact path="/category/:currentTag">
                <PostsByTag posts={posts} tag={tag} />
            </Route>
        </>
    );
};

export default PostsContainer;
