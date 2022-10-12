import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div >
            <h1>
                * State the purpose of react router?
            </h1>
            <h4>Answer: <small>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</small></h4>
            <h1>
                * How does context api works?
            </h1>
            <h4>Answer:<small> The React Context API has been around as an experimental feature for a while now, but only in Reacts version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.This new API solves one major problemprop drilling. Even if youre not familiar with the term, if youve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components.
            </small></h4>
            <h1>
                * What is useref in react?
            </h1>
            <h4>Answer:<small> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</small></h4>


        </div>
    );
};

export default Blog;