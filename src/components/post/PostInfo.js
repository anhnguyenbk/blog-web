import React from "react";
import Moment from 'react-moment';
import {Link} from "react-router-dom";

export default class PostInfo extends React.Component {
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

            <div className="post-info-wrapper">
                <div className="post-info"><Moment>{post.createdAt}</Moment></div>
                <div className="post-info">|</div>
                {
                    post.categories ? post.categories.map((category) => {
                        return <Link key={category.value} to={"/categories/" + category.value}
                                     className="post-info when-link">{category.text}</Link>
                    }) : ''
                }
            </div>
        )
    }
}
