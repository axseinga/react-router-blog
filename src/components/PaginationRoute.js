import React from "react";
import { Link, useParams } from "react-router-dom";

const PaginationRoute = (props) => {
    const { children } = props;
    console.log("hello its paginationroute");
    const { limit } = props;
    const length = children.length;

    const { page } = useParams();
    const begin = limit * (page - 1);
    const end = page * limit;

    const pages = Math.ceil(length / limit);
    const links = new Array(pages).fill(0).map((item, index) => (
        <li key={index}>
            <Link to={`/pages/${index + 1}`}>{index + 1}</Link>
        </li>
    ));
    console.log(links);

    return (
        <>
            {children.slice(begin, end)}
            <nav>
                <ul>{links}</ul>
            </nav>
        </>
    );
};

export default PaginationRoute;
