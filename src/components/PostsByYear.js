import React from "react";
import StyledPosts from "./styled/Posts.styled";
import { useParams } from "react-router";
import ShowContent from "./ShowContentPagination";

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

    return (
        <StyledPosts>
            <ShowContent posts={filteredPosts} path={path} />
        </StyledPosts>
    );
};

export default PostsByYear;
