import React from "react";
import StyledPostsContainer from "./styled/PostsContainer.styled";
import Post from "./Post";

const PostsContainer = (props) => {
    const showContent = (props) => {
        if (props.doc) {
            console.log(props);
            /*const imgs = Object.keys(props.doc.data.avatars[0]).map((key) => {
                return props.doc.data.avatars[0][key];
            });*/
            return <div>sa posty</div>;
        } else {
            return <div>No posts</div>;
        }
    };
    return (
        <StyledPostsContainer>
            <Post />
        </StyledPostsContainer>
    );
};

export default PostsContainer;
