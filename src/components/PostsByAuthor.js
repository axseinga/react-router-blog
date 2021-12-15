import React from "react";
import StyledPosts from "./styled/Posts.styled";
import { useParams } from "react-router";
import ShowContent from "./ShowContentPagination";

const PostsByAuthor = (props) => {
    const { posts } = props;

    const { name } = useParams();

    const filteredPosts = posts.filter(
        (post) => post.data.author[0].text === name
    );

    const path = `/posts-by-${name}/page`;

    return (
        <StyledPosts>
            <ShowContent posts={filteredPosts} path={path} />
        </StyledPosts>
    );
};

export default PostsByAuthor;
