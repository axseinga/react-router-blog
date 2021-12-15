import React from "react";
import { Route, Switch } from "react-router-dom";
import PaginationRoute from "./PaginationRoute";

const Pagination = (props) => {
    const { children, path } = props;
    const limit = 6;

    return (
        <Switch>
            <Route path={`${path}/:page`}>
                <PaginationRoute limit={limit} path={path}>
                    {children}
                </PaginationRoute>
            </Route>
        </Switch>
    );
};

export default Pagination;
