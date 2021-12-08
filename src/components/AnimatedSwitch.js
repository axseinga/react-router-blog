import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter, useLocation } from "react-router-dom";
import Routes from "./Routes";
import PageAnimation from "./styled/PageAnimation";

const AnimatedSwitch = (props) => {
    const { key, pathname } = useLocation();
    const animationTime = 500;
    return (
        <TransitionGroup>
            <CSSTransition
                classNames="page-animation"
                timeout={1000}
                key={key ? key : pathname}
            >
                <PageAnimation time={animationTime}>
                    <Routes posts={props.posts} />
                </PageAnimation>
            </CSSTransition>
        </TransitionGroup>
    );
};
export default withRouter(AnimatedSwitch);
