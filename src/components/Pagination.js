import React from "react";
import { Route, Switch } from "react-router-dom";
import PaginationRoute from "./PaginationRoute";

const Pagination = (props) => {
    const { children } = props;
    const limit = 2;

    return (
        <Switch>
            <Route path={`/pages/:page`}>
                <PaginationRoute limit={limit}>{children}</PaginationRoute>
            </Route>
        </Switch>
    );
};

export default Pagination;
