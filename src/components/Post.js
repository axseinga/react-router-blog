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
    const uid = post.uid;

    return (
        <StyledPost>
            <Link to={`/post/${uid}`} className="post-title">
                <h2>{title}</h2>
            </Link>
            <h4>{desc}</h4>
            <p>{content}</p>
            <img src={img} alt={post.uid} />
            <ul>
                {tags.map((tag, i) => (
                    <li key={`tag_${i}`}>
                        <Link
                            to={`/category/${tag.tag}/page/1`}
                            className="post-tag"
                        >
                            {tag.tag}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                <span>
                    Written by{" "}
                    <Link
                        to={`/posts-by-${author}/page/1`}
                        className="post-link"
                    >
                        {author}
                    </Link>
                </span>
                <span>on {date}</span>
            </div>
        </StyledPost>
    );
};

export default Post;
