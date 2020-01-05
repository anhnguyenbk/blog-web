import React from "react";
import axios from 'axios';
import PostItem from "./post/PostItem";

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_POST_API)
            .then(res => {
                const posts = res.data;
                this.setState({posts: posts});
            })
    }

    render() {
        return (
            <div className="content">
                <div className="w-container"><h1 className="section-header">All Posts</h1>
                    <div className="w-dyn-list">
                        <div className="w-dyn-items">

                            {this.state.posts.map(function (post) {
                                return <PostItem key={post.id} post={post}/>;
                            })}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Posts;