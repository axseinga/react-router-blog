import React from "react";
import { NavLink, useParams } from "react-router-dom";
import StyledPaginationRoute from "./styled/PaginationRoute.styled";

const PaginationRoute = (props) => {
    const { children } = props;
    const { limit } = props;
    const { path } = props;
    const length = children.length;

    console.log(`paginationRoute: ${path}`);

    const { page } = useParams();
    const begin = limit * (page - 1);
    const end = page * limit;

    const pages = Math.ceil(length / limit);
    const links = new Array(pages).fill(0).map((item, index) => (
        <li key={index}>
            <NavLink
                className="nav-link"
                activeClassName="active"
                to={`${path}/${index + 1}`}
            >
                {index + 1}{" "}
            </NavLink>
        </li>
    ));

    return (
        <StyledPaginationRoute>
            {children.slice(begin, end)}
            <ul>{links}</ul>
        </StyledPaginationRoute>
    );
};

export default PaginationRoute;
