import StyledSidebar from "./styled/Sidebar.styled";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    let tags = [];
    props.posts.forEach((post) => {
        tags.push(post.data.tags);
    });
    let cat = [];
    tags.flat(2).forEach((item) => {
        cat.push(item.tag);
    });
    let uniqueCat = [...new Set(cat)];
    const showCategories = () => {
        return uniqueCat.map((cat) => {
            return (
                <NavLink
                    key={cat}
                    to={`/category/${cat}`}
                    className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                >
                    {cat}
                </NavLink>
            );
        });
    };
    return (
        <StyledSidebar>
            <h4>Navigation</h4>
            <NavLink
                to={`/`}
                className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                }
            >
                Home
            </NavLink>
            <NavLink
                to={`/about-us`}
                className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                }
            >
                About us
            </NavLink>
            <h5>Categories</h5>
            <div>{showCategories()}</div>
            <h5>By month:</h5>
            <div></div>
        </StyledSidebar>
    );
};

export default Sidebar;
