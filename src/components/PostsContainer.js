import React from "react";
import StyledPostsContainer from "./styled/PostsContainer.styled";
import Post from "./Post";

const PostsContainer = (props) => {
    const showContent = (props) => {
        const { posts } = props;
        return posts.map((post) => {
            return <Post key={post.id} post={post} />;
        });
    };
    return <StyledPostsContainer>{showContent(props)}</StyledPostsContainer>;
};

export default PostsContainer;
