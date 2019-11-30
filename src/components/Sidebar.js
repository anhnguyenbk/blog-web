import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-column">
                <div data-collapse="medium" data-animation="default" data-duration="400"
                     className="navigation-bar w-nav">
                    <div className="w-container"><a href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                                    className="logo-link w-nav-brand"><h1
                        className="logo-text">Moon</h1></a>
                        <nav role="navigation" className="navigation-menu w-nav-menu"><p
                            className="main-subheading w-hidden-medium w-hidden-small w-hidden-tiny">I'm a simple
                            responsive blog
                            template. Easily add new blog posts using the Webflow Editor or customize your layout/design
                            using the
                            Webflow Designer.</p>
                            <div className="divider w-hidden-medium w-hidden-small w-hidden-tiny"></div>
                            <a href="https://colorlesss-ultra-awesome-project-2.webflow.io/"
                               className="nav-link w-nav-link w--current">Home</a><a
                                href="https://colorlesss-ultra-awesome-project-2.webflow.io/all-posts"
                                className="nav-link w-nav-link">All Posts</a><a
                                href="https://colorlesss-ultra-awesome-project-2.webflow.io/about"
                                className="nav-link w-nav-link">About</a><a
                                href="https://colorlesss-ultra-awesome-project-2.webflow.io/contact"
                                className="nav-link w-nav-link">Contact</a>
                            <div className="divider"></div>

                            <div className="social-link-group"><a
                                href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                className="social-icon-link w-inline-block"><img
                                src="./Blog Home_files/5de29e2b59d27b7770218782_social-03-white.svg" width="25" alt=""/></a>

                                <a href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                   className="social-icon-link w-inline-block"><img
                                    src="./Blog Home_files/5de29e2b59d27b3500218799_social-18-white.svg" width="25"
                                    alt=""/></a><a
                                    href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                    className="social-icon-link w-inline-block"><img
                                    src="./Blog Home_files/5de29e2b59d27b67dc21878e_social-15-white.svg" width="25"
                                    alt=""/></a><a
                                    href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                    className="social-icon-link w-inline-block"><img
                                    src="./Blog Home_files/5de29e2b59d27b5e4c21875a_social-33-white.svg" width="25"
                                    alt=""/></a><a
                                    href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                    className="social-icon-link w-inline-block"><img
                                    src="./Blog Home_files/5de29e2b59d27bacc821876e_social-07-white.svg" width="25"
                                    alt=""/></a><a
                                    href="https://colorlesss-ultra-awesome-project-2.webflow.io/#"
                                    className="social-icon-link w-inline-block"><img
                                    src="./Blog Home_files/5de29e2b59d27b02ba21878a_social-09-white.svg" width="25"
                                    alt=""/></a>
                            </div>
                        </nav>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                    <div className="w-nav-overlay" data-wf-ignore=""></div>
                </div>
            </div>
        )
    }
}

export default Sidebar;