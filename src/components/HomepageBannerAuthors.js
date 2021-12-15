import StyledHomepageBannerAuthors from "./styled/HomepageBannerAuthors.styled";
import { NavLink } from "react-router-dom";

const HomepageBannerAuthors = (props) => {
    const { imgs } = props;
    return (
        <StyledHomepageBannerAuthors>
            <p>Choose the author!</p>
            <div>
                {imgs.map((img, i) => (
                    <NavLink to={`/posts-by-${img.alt}/page/1`} key={i}>
                        <img src={img.url} alt={`choose-${img.alt}`} />
                    </NavLink>
                ))}
            </div>
        </StyledHomepageBannerAuthors>
    );
};

export default HomepageBannerAuthors;
