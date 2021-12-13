import React from "react";
import StyledAboutAuthor from "./styled/AboutAuthor.styled";
import { NavLink } from "react-router-dom";
import { RichText } from "prismic-reactjs";

const AboutAuthor = ({ props }) => {
    const img = props.data.image.url;
    return (
        <StyledAboutAuthor>
            <h2>{RichText.asText(props.data.name)}</h2>
            <p>{RichText.asText(props.data.aboutme)}</p>
            <div>
                <NavLink
                    className="nav_link"
                    to={`/posts-by-${RichText.asText(props.data.name)}/page/1`}
                >
                    {RichText.asText(props.data.seemyposts)}
                </NavLink>
                <img src={img} alt={props.data.name} />
            </div>
        </StyledAboutAuthor>
    );
};

export default AboutAuthor;
