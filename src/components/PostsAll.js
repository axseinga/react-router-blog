import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";

const Posts = (props) => {
    const showContent = (props) => {
        const posts = props;
        return posts.map((post) => {
            return <Post key={post.id} post={post} />;
        });
    };
    return <StyledPosts>{showContent(props.posts)}</StyledPosts>;
};

export default Posts;
