import React from "react";
import { RichText } from "prismic-reactjs";

const HomepageBanner = (props) => {
    const showContent = (props) => {
        if (props.doc) {
            const imgs = Object.keys(props.doc.data.avatars[0]).map((key) => {
                return props.doc.data.avatars[0][key];
            });
            return (
                <div>
                    <h1>{RichText.asText(props.doc.data.page_title)}</h1>
                    <div>
                        {imgs.map((img, i) => (
                            <img key={i} src={img.url} />
                        ))}
                    </div>
                </div>
            );
        } else {
            return <div>No content</div>;
        }
    };

    return <>{showContent(props)}</>;
};

export default HomepageBanner;
