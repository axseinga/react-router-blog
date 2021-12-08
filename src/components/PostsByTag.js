import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";

const PostsByTag = (props) => {
    const posts = props.posts;
    const getSlug = props.getSlug;

    const { currentTag } = useParams();

    const filteredPosts = [];
    posts.filter((post) => {
        post.data.tags.filter((v) => {
            if (v.tag === currentTag) {
                filteredPosts.push(post);
            }
        });
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

export default PostsByTag;
