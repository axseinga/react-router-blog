import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import Pagination from "./Pagination";

const Posts = (props) => {
    const { posts } = props;
    const ShowContent = (props) => {
        const path = "/page";
        return (
            <Pagination posts={posts} path={path}>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </Pagination>
        );
    };
    return (
        <StyledPosts>
            <ShowContent posts={posts} />
        </StyledPosts>
    );
};

export default Posts;
