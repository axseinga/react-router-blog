import React from "react";
import PostsAll from "./PostsAll";
import PostsByAuthor from "./PostsByAuthor";
import { Route, useParams } from "react-router";

const PostsContainer = (props) => {
    const { posts, author } = props;
    const { name } = useParams();
    return (
        <>
            <Route exact path="/">
                <PostsAll posts={posts} />
            </Route>
            <Route exact path="/posts-by-:name">
                <PostsByAuthor posts={posts} author={author} />
            </Route>
        </>
    );
};

export default PostsContainer;
