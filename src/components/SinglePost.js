import React from "react";
import axios from 'axios';
import {withRouter} from "react-router";
import ReactHtmlParser from 'react-html-parser';
import Moment from "react-moment";
import {Link} from "react-router-dom";
import PostInfo from "./post/PostInfo";

class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        axios.get(process.env.REACT_APP_BLOG_SERVICE_API + "/posts/slug/" + params.slug)
            .then(res => {
                console.log(res.data);
                this.setState({post: res.data});
            })
    }

    render() {
        var post = this.state.post;

        return (
            <div className="content">
                <div className="w-container">
                    <div className="post-title-section">
                        <h1>{post.title}</h1>
                        <PostInfo post={post} />
                    </div>
                    <div className="body-copy w-richtext">
                        <p>{post.desc}</p>
                        {ReactHtmlParser(post.content)}
                    </div>

                    <div className="button-wrapper"><a href="/all-posts" className="button w-button">←&nbsp;View all
                        posts</a></div>
                </div>
            </div>
        )
    }

}

export default withRouter(SinglePost);