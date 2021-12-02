import React from "react";
import StyledPost from "./styled/Post.styled";

const Post = (props) => {
    const { post } = props;
    const title = post.data.title[0].text;
    const content = post.data.content[0].text;
    const img = post.data.image.url;
    const author = post.data.author[0].text;
    const date = post.data.date;
    return (
        <StyledPost>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={img} />
            <div>
                <span>Written by {author}</span>
                <span>on {date}</span>
            </div>
        </StyledPost>
    );
};

export default Post;
