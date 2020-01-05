import React from "react";
import {Link} from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="w-container">
                    <div className="body-copy w-richtext"><h1>About me</h1><p>The rich text element allows you to create
                        and format headings, paragraphs, blockquotes, images, and video all in one place instead of
                        having to add and format them individually. Just double-click and easily create content.</p>
                        <h2>Something else here</h2><p>Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod
                            semper.</p><h4>Something else here</h4><p>Vestibulum id ligula porta felis euismod semper.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                            id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor
                            fringilla.</p></div>

                    <Link to="/contact" className="button w-button">Get in touch</Link>
                </div>
            </div>
        )
    }
}

export default About;