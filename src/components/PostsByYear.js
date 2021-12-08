import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";

const PostsByYear = (props) => {
    const { posts } = props;

    const { currentYear } = useParams();

    const filteredPosts = [];
    posts.forEach((post) => {
        if (post.data.date.substring(0, 4) === currentYear) {
            filteredPosts.push(post);
        }
    });
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

export default PostsByYear;
