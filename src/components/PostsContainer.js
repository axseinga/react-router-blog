import React from "react";
import AnimatedSwitch from "./AnimatedSwitch";
import Routes from "./Routes";

const PostsContainer = (props) => {
    const { posts } = props;

    return <AnimatedSwitch posts={posts} />;
};

export default PostsContainer;
