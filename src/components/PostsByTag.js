import React from "react";
import StyledPosts from "./styled/Posts.styled";
import { useParams } from "react-router";
import ShowContent from "./ShowContentPagination";

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

    return (
        <StyledPosts>
            <ShowContent posts={filteredPosts} path={path} />
        </StyledPosts>
    );
};

export default PostsByTag;
