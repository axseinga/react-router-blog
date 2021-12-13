# devmentor.pl - React: Router / React blog with prismic.io

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Video](#video)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The challenge was to create a website that mimics a blog. The content had to be from [headless CMS](https://prismic.io/) and coded with React Router. The goal was to code links that will navigate the User to sorted posts (by tag, by year, by author) and to every single post. The issue to resolve was to come up with intuitive names for the routes so the User can easily navigate between the pages and that the links correctly describe the content. Pages had to be paginated with a limit of 6 posts per page.

Each post had to contain:

-   title,
-   description,
-   content,
-   photo,
-   slug/alias,
-   categories

Clickable parts:

-   the logo,
-   authors' avatars,
-   all links
-   titles of the posts
-   tags inside the posts
-   authors' names inside the posts

### Video

### Links

-   Solution URL: [Check out my code](https://github.com/axseinga/react-router-blog)
-   Live Site URL: [and see live site here!](https://axseinga-react-router-blog.netlify.app/)

## My process

I decided to fill in my blog with silly, cute content so I could quickly focus on coding the layout. I found this challenge difficult as headless CMS can be intimidating at first. However, after reading documentation and experimenting with content I soon was ready to start coding.

First, I created a function that fetches data from prismic API so I can use it in my project. The use cases can be found in prismic React setup.

```

const fetchData = async (type) => {
    const response = await Client.query(
        Prismic.Predicates.at("document.type", type)
    );
    if (response) {
        return response;
    }
};
```

I decided that I want my component to have a banner and sidebar menu so I created the following base components for my layout:
`Homepage.js` which is the main page, `HomepageBanner.js`, `PostsContainer.js`, and `Sidebar.js`. This layout brought me some difficulties which I explain later.

My pages: `PostsAll.js`, `PostsByAuthor.js`, `PostsByTag.js`, `PostsByYeay.js` and `AboutPage.js`.

My first approach with getting the values from onClick events, storing it with React Hook useState, and next passing to React routes was incorrect and resulted in wrong understanding with useParams() hook. It took me a lot of time trying to figure out how to fix my application but I couldn't make it work. After getting some help from my Mentor I deleted all useState hooks and focused on passing parameters from Links/NavLinks to useParams() hook. This way my Routes started to work in the way I wanted them to.

### Built with

-   React
-   Create React app
-   React Hooks
-   React Router
-   React Transition Group lib
-   Styled Components
-   prismic.io
-   Unsplash

### What I learned

I learned about headless CMS and how to use it which is very practical knowledge and lets creates project fit for clients who want to manage their content on the website.
And I learned about React router and about useParams() and that is a lot! It took me some time to understand the concept which now seems easy. This was a good lesson for me to take things slow and to dive into documentation to fully understand how something works. It reminded me how important is to ask for help and get feedback from more experienced developers and to be humble for myself and to know that even the very difficult things at first can become understandable at some point.

### Useful resources

-   [prismic.io](https://prismic.io/) - headless CMS with easy UI to fill in data for the website. Can be fetch with API.
-   [Reactrouter.com](https://reactrouter.com/) - documentation for every version of React Router.
-   [Building a react router sidebar with react](https://thekenyandev.com/blog/building-a-react-router-sidebar-with-react/) - interesting tutorial from TheKenyaDev.
-   [Unsplash.com](https://unsplash.com/) - the photos I used in this project come from Unsplash.

## Author

-   Frontend Mentor - [@Axseinga](https://www.frontendmentor.io/profile/yourusername)
-   LinkedIn - [Agnieszka Urbanowicz](https://www.linkedin.com/in/agnieszka-urbanowicz-051147151/)

## Acknowledgments

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.
