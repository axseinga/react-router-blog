import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import Pagination from "./Pagination";

const Posts = (props) => {
    const { posts, getSlug } = props;
    const showContent = () => {
        return (
            <Pagination posts={posts}>
                {posts.map((post) => (
                    <Post key={post.id} post={post} getSlug={getSlug} />
                ))}
            </Pagination>
        );
    };
    return <StyledPosts>{showContent(props.posts)}</StyledPosts>;
};

export default Posts;
