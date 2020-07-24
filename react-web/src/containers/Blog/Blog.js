import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
import './Blog.css';


const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
} );

class Blog extends Component {

    state = {
        auth: true
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/post" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/post" component={Posts} />

                    <Route render={() => <h1>Not Found</h1>} />

                    {/* <Redirect from="/" to="/post" />    */}

                </Switch>
            </div>
        );
    }
}

export default Blog;