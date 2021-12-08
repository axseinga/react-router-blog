import PostsAll from "./PostsAll";
import PostsByAuthor from "./PostsByAuthor";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./Aboutpage";
import PostsByTag from "./PostsByTag";
import PostsByYear from "./PostsByYear";
import SinglePost from "./SinglePost";

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/about-us">
                <AboutPage />
            </Route>
            <Route path="/posts-by-:name">
                <PostsByAuthor posts={props.posts} />
            </Route>
            <Route path="/category/:currentTag">
                <PostsByTag posts={props.posts} />
            </Route>
            <Route path="/year/:currentYear">
                <PostsByYear posts={props.posts} />
            </Route>
            <Route path="/post/:slugParam">
                <SinglePost posts={props.posts} />
            </Route>
            <Route path="/pages">
                <PostsAll posts={props.posts} />
            </Route>
            <Redirect from="/" to="/pages/1" />
        </Switch>
    );
};

export default Routes;
