import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";

const PostsByYear = (props) => {
    const posts = props.posts;
    const year = props.year;
    const getSlug = props.getSlug;
    const yearStr = year.toString();

    const { currentYear } = useParams();

    const filteredPosts = [];
    posts.forEach((post) => {
        if (post.data.date.substring(0, 4) === yearStr) {
            filteredPosts.push(post);
        }
    });
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

export default PostsByYear;
