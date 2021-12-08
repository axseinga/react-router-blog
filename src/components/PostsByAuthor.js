import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";

const PostsByAuthor = (props) => {
    const { posts } = props;

    const { name } = useParams();

    const filteredPosts = posts.filter(
        (post) => post.data.author[0].text === name
    );

    const ShowContent = () => {
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

export default PostsByAuthor;
