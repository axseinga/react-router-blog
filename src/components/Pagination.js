import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PaginationRoute from "./PaginationRoute";

const Pagination = (props) => {
    const { children } = props;
    const limit = 2;
    console.log(children);

    return (
        <Switch>
            <Route path={`/pages/:page`}>
                <PaginationRoute limit={limit}>{children}</PaginationRoute>
            </Route>
            {/*<Redirect to={`/pages/1`} />*/}
        </Switch>
    );
};

export default Pagination;
