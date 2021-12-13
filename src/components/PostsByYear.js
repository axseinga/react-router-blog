import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";
import Pagination from "./Pagination";

const PostsByYear = (props) => {
    const { posts } = props;

    const { currentYear } = useParams();

    const filteredPosts = [];
    posts.forEach((post) => {
        if (post.data.date.substring(0, 4) === currentYear) {
            filteredPosts.push(post);
        }
    });

    const path = `/year/${currentYear}/page`;

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

export default PostsByYear;
