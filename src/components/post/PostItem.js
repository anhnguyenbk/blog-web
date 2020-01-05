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
                        <Link to={this.postDetailLink(post.slug)}
                           className="blog-title-link w-inline-block">
                            <h1 className="blog-title">{post.title}</h1></Link>
                        <PostInfo post={post}/>

                        <p className="post-summary">{post.desc}</p>
                        <Link to={this.postDetailLink(post.slug)}
                           className="button-round w-button">Continue reading →</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostItem;