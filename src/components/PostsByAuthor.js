import React from "react";
import StyledPosts from "./styled/Posts.styled";
import Post from "./Post";
import { useParams } from "react-router";
import Pagination from "./Pagination";

const PostsByAuthor = (props) => {
    const { posts } = props;

    const { name } = useParams();

    const filteredPosts = posts.filter(
        (post) => post.data.author[0].text === name
    );

    /*const path = `posts-by-${name}/pages`;

    const ShowContent = () => {
        return (
            <Pagination posts={filteredPosts} path={path}>
                {filteredPosts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </Pagination>
        );
    };*/

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
