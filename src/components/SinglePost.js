import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
    const { posts, slug, getSlug } = props;

    const { slugParam } = useParams();
    const ShowContent = () => {
        console.log(slug);
        const filteredPosts = posts.filter((post) => post.uid === slug);
        console.log(filteredPosts);
        return posts.map((post) => {
            return <Post key={post.id} post={post} getSlug={getSlug} />;
        });
    };
    return (
        <StyledPosts>
            <ShowContent />
        </StyledPosts>
    );
};

export default SinglePost;
