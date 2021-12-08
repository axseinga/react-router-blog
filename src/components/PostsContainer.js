import React from "react";
import PostsAll from "./PostsAll";
import PostsByAuthor from "./PostsByAuthor";
import { Route, useParams, Switch, Redirect } from "react-router-dom";
import AboutPage from "./Aboutpage";
import PostsByTag from "./PostsByTag";
import PostsByYear from "./PostsByYear";
import SinglePost from "./SinglePost";

const PostsContainer = (props) => {
    const { posts, getSlug, slug } = props;

    return (
        <Switch>
            <Route path="/about-us">
                <AboutPage />
            </Route>
            <Route path="/posts-by-:name">
                <PostsByAuthor posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
            <Route path="/category/:currentTag">
                <PostsByTag posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
            <Route path="/year/:currentYear">
                <PostsByYear posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
            <Route path="/post/:slugParam">
                <SinglePost posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
            <Route path="/pages">
                <PostsAll posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
            <Redirect from="/" to="/pages/1" />
        </Switch>
    );
};

export default PostsContainer;
