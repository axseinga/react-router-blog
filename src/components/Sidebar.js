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
    const ShowCategories = () => {
        return uniqueCat.map((cat) => {
            return (
                <NavLink
                    key={cat}
                    exact
                    to={`/category/${cat}`}
                    className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    onClick={() => props.getTag(cat)}
                >
                    {cat}
                </NavLink>
            );
        });
    };
    const ShowYearLinks = () => {
        const years = [2021, 2020, 2019];
        return years.map((y) => {
            return (
                <NavLink
                    exact
                    key={y}
                    to={`/year/${y}`}
                    className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                    }
                    onClick={() => props.getYear(y)}
                >
                    {y}
                </NavLink>
            );
        });
    };
    return (
        <StyledSidebar>
            <h4>Navigation</h4>
            <NavLink
                exact
                to={`/pages/1`}
                className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                }
            >
                Home
            </NavLink>
            <NavLink
                exact
                to={`/about-us`}
                className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                }
            >
                About us
            </NavLink>
            <h5>Categories</h5>
            <div>
                <ShowCategories />
            </div>
            <h5>By year:</h5>
            <div>
                <ShowYearLinks />
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;
