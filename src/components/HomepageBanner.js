import React from "react";
import { RichText } from "prismic-reactjs";
import StyledHomepageBanner from "./styled/HomepageBanner.styled";
import { NavLink } from "react-router-dom";

const HomepageBanner = (props) => {
    const showContent = (props) => {
        if (props.doc) {
            const imgs = Object.keys(props.doc.data.avatars[0]).map((key) => {
                return props.doc.data.avatars[0][key];
            });
            return (
                <StyledHomepageBanner>
                    <h1>{RichText.asText(props.doc.data.page_title)}</h1>
                    <div>
                        <p>Choose the author!</p>
                        <div>
                            {imgs.map((img, i) => (
                                <NavLink
                                    to={`/posts-by-${img.alt}`}
                                    key={i}
                                    onClick={() => props.getAuthor(img.alt)}
                                >
                                    <img src={img.url} />
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </StyledHomepageBanner>
            );
        } else {
            return <div>No content</div>;
        }
    };

    return <>{showContent(props)}</>;
};

export default HomepageBanner;
