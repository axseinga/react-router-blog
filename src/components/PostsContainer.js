import React from "react";
import PostsAll from "./PostsAll";
import PostsByAuthor from "./PostsByAuthor";
import { Route, useParams, Switch, Redirect } from "react-router-dom";
import AboutPage from "./Aboutpage";
import PostsByTag from "./PostsByTag";
import PostsByYear from "./PostsByYear";
import SinglePost from "./SinglePost";

const PostsContainer = (props) => {
    const { posts, author, tag, year, getSlug, slug } = props;
    const { name, currentTag, currentYear, slugParam } = useParams();

    return (
        <Switch>
            <Route path="/">
                <PostsAll posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
            <Route path="/about-us">
                <AboutPage />
            </Route>
            <Route path="/posts-by-:name">
                <PostsByAuthor
                    posts={posts}
                    author={author}
                    slug={slug}
                    getSlug={getSlug}
                />
            </Route>
            <Route path="/category/:currentTag">
                <PostsByTag
                    posts={posts}
                    tag={tag}
                    slug={slug}
                    getSlug={getSlug}
                />
            </Route>
            <Route path="/year/:currentYear">
                <PostsByYear
                    posts={posts}
                    year={year}
                    slug={slug}
                    getSlug={getSlug}
                />
            </Route>
            <Route path="/post/:slugParam">
                <SinglePost posts={posts} slug={slug} getSlug={getSlug} />
            </Route>
        </Switch>
    );
};

export default PostsContainer;
