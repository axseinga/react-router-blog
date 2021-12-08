import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
    const { posts } = props;

    const { slugParam } = useParams();
    const ShowContent = () => {
        const filteredPosts = posts.filter((post) => post.uid === slugParam);
        return filteredPosts.map((post) => {
            return <Post key={post.id} post={post} />;
        });
    };
    return (
        <StyledPosts>
            <ShowContent />
        </StyledPosts>
    );
};

export default SinglePost;
