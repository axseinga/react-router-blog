import React from "react";
import { RichText } from "prismic-reactjs";

const HomepageBanner = (props) => {
    return (
        <div>
            {props.doc ? (
                <>
                    <h1>{RichText.asText(props.doc.data.page_title)}</h1>
                </>
            ) : (
                <div>No content</div>
            )}
        </div>
    );
};

export default HomepageBanner;
