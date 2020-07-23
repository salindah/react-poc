import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        error: false
    };

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    componentDidMount() {

        console.log(this.props);
        axios.get('/posts')
            .then(response => {

                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });

                this.setState({
                    posts: updatedPosts
                });
                console.log(updatedPosts);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={this.props.match.url + '/' + post.id} key={post.id}>
                        <Post
                            author={post.author}
                            title={post.title}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>);
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                {/* <Route path="post/:id" exact component={FullPost} /> */}
            </div>
        );
    }
}

export default Posts;