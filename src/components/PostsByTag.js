import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";
import Pagination from "./Pagination";

const PostsByTag = (props) => {
    const { posts } = props;

    const { currentTag } = useParams();

    const filteredPosts = [];
    posts.filter((post) => {
        post.data.tags.filter((v) => {
            if (v.tag === currentTag) {
                filteredPosts.push(post);
            }
        });
    });

    const path = `/category/${currentTag}/page`;

    const ShowContent = () => {
        return (
            <Pagination posts={filteredPosts} path={path}>
                {filteredPosts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </Pagination>
        );
    };

    return (
        <StyledPosts>
            <ShowContent />
        </StyledPosts>
    );
};

export default PostsByTag;
