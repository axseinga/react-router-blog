import React from "react";
import StyledPosts from "./styled/Posts.styled";
import ShowContent from "./ShowContentPagination";

const Posts = (props) => {
    const { posts } = props;
    const path = "/page";

    return (
        <StyledPosts>
            <ShowContent posts={posts} path={path} />
        </StyledPosts>
    );
};

export default Posts;
