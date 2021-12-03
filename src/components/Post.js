import React from "react";
import StyledPost from "./styled/Post.styled";
import { Link } from "react-router-dom";

const Post = (props) => {
    const { post } = props;
    const title = post.data.title[0].text;
    const desc = post.data.description[0].text;
    const content = post.data.content[0].text;
    const img = post.data.image.url;
    const tags = post.data.tags;
    const author = post.data.author[0].text;
    const date = post.data.date;
    return (
        <StyledPost>
            <h2>{title}</h2>
            <h4>{desc}</h4>
            <p>{content}</p>
            <img src={img} />
            <ul>
                {tags.map((tag, i) => (
                    <li key={`tag_${i}`}>
                        <Link to={`/category/${tag.tag}`}>{tag.tag}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <span>
                    Written by <Link to={`/posts-by-${author}`}>{author}</Link>
                </span>
                <span>on {date}</span>
            </div>
        </StyledPost>
    );
};

export default Post;
