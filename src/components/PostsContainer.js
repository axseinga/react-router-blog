import React from "react";
import Routes from "./Routes";

const PostsContainer = (props) => {
    const { posts } = props;

    return <Routes posts={posts} />;
};

export default PostsContainer;
