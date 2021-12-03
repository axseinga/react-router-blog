import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";

const SinglePost = (props) => {
    const { posts, slug, getSlug } = props;
    console.log(posts, slug, getSlug);
    const ShowContent = (props) => {
        const posts = props;
        /*return posts.map((post) => {
            return <Post key={post.id} post={post} />;
        });*/
    };
    return (
        <StyledPosts>
            <div>tu bedzie post</div>
        </StyledPosts>
    );
};

export default SinglePost;
