import React from "react";
import PostItem from "./post/PostItem";
import axios from "axios";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BLOG_SERVICE_API + "/posts")
            .then(res => {
                const posts = res.data;
                this.setState({posts: posts});
            })
    }

    render() {
        return (
            <div className="content">
                <div className="blog-list w-dyn-list">
                    <div className="w-dyn-items">

                        {this.state.posts.map(function (post) {
                            return <PostItem key={post.id} post={post}/>;
                        })}

                    </div>
                </div>
                <div className="button-wrapper"><a href="/all-posts" className="button w-button">More posts&nbsp;→</a>
                </div>
            </div>
        )
    }
}

export default Home;