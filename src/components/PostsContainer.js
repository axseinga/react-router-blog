import React from "react";
import Posts from "./PostsAll";

const PostsContainer = (props) => {
    const posts = props;
    return <Posts posts={posts} />;
};

export default PostsContainer;
