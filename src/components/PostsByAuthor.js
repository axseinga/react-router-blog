import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";

const PostsByAuthor = (props) => {
    const posts = props.posts;
    const author = props.author;
    const getSlug = props.getSlug;

    const { name } = useParams();

    const filteredPosts = posts.filter(
        (post) => post.data.author[0].text === author
    );

    const ShowContent = () => {
        return filteredPosts.map((post) => {
            return <Post key={post.id} post={post} getSlug={getSlug} />;
        });
    };
    return (
        <StyledPosts>
            <ShowContent />
        </StyledPosts>
    );
};

export default PostsByAuthor;
