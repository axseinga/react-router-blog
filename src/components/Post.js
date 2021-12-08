import React from "react";
import StyledPost from "./styled/Post.styled";
import { Link, useParams } from "react-router-dom";

const Post = (props) => {
    const { post, getSlug } = props;
    const title = post.data.title[0].text;
    const desc = post.data.description[0].text;
    const content = post.data.content[0].text;
    const img = post.data.image.url;
    const tags = post.data.tags;
    const author = post.data.author[0].text;
    const date = post.data.date;
    const uid = post.uid;

    const { slugParam } = useParams();

    return (
        <StyledPost>
            <Link to={`/post/${uid}`} onClick={() => getSlug(post.uid)}>
                <h2>{title}</h2>
            </Link>
            <h4>{desc}</h4>
            <p>{content}</p>
            <img src={img} alt={post.uid} />
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
