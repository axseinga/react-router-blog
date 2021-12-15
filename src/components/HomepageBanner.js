import React from "react";
import { RichText } from "prismic-reactjs";
import StyledHomepageBanner from "./styled/HomepageBanner.styled";
import { NavLink } from "react-router-dom";
import HomepageBannerAuthors from "./HomepageBannerAuthors";

const HomepageBanner = (props) => {
    const showContent = (props) => {
        if (props.doc) {
            const imgs = Object.keys(props.doc.data.avatars[0]).map((key) => {
                return props.doc.data.avatars[0][key];
            });
            return (
                <StyledHomepageBanner>
                    <NavLink
                        exact
                        to={`/page/1`}
                        className="nav-link"
                        activeClassName="active"
                    >
                        <h1>{RichText.asText(props.doc.data.page_title)}</h1>
                    </NavLink>
                    <HomepageBannerAuthors imgs={imgs} />
                </StyledHomepageBanner>
            );
        } else {
            return <div>Loading content...</div>;
        }
    };

    return <>{showContent(props)}</>;
};

export default HomepageBanner;
