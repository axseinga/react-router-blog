import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";

const PostsByYear = (props) => {
    const posts = props.posts;
    const year = props.year;
    const yearStr = year.toString();

    const filteredPosts = [];
    posts.forEach((post) => {
        if (post.data.date.substring(0, 4) === yearStr) {
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
