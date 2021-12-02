import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";

const PostsByAuthor = (props) => {
    const posts = props.posts;
    const author = props.author;

    const filteredPosts = posts.filter(
        (post) => post.data.author[0].text === author
    );

    const showContent = () => {
        return filteredPosts.map((post) => {
            return <Post key={post.id} post={post} />;
        });
    };
    return <StyledPosts>{showContent()}</StyledPosts>;
};

export default PostsByAuthor;
