import React from "react";
import Moment from 'react-moment';
import {Link} from "react-router-dom";
import PostInfo from "./PostInfo";

class PostItem extends React.Component {
    constructor(props) {
        super(props);

        this.postDetailLink = this.postDetailLink.bind(this);
    }

    postDetailLink(slug) {
        return "/" + slug;
    }

    render() {
        var post = this.props.post;
        return (
            <div className="w-dyn-item">
                <div className="post-wrapper">
                    <div>
                        <a href={this.postDetailLink(post.slug)}
                           className="blog-title-link w-inline-block">
                            <h1 className="blog-title">{post.title}</h1></a>
                        <PostInfo post={post}/>

                        <p className="post-summary">{post.desc}</p>
                        <a href={this.postDetailLink(post.slug)}
                           className="button-round w-button">Continue reading →</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;