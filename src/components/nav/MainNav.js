import React from "react";
import NavItem from "./NavItem";
import SocialItemGroup from "./SocialItemGroup";

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav role="navigation" className="navigation-menu w-nav-menu"><p
                className="main-subheading w-hidden-medium w-hidden-small w-hidden-tiny">I'm a simple
                responsive blog template. Easily add new blog posts using the Webflow Editor or customize your
                layout/design
                using the
                Webflow Designer.</p>

                <div className="divider w-hidden-medium w-hidden-small w-hidden-tiny"></div>

                <NavItem linkTo="/">Home</NavItem>
                <NavItem linkTo="/posts">All Posts</NavItem>
                <NavItem linkTo="/about">About</NavItem>
                <NavItem linkTo="/contact">Contact</NavItem>

                <div className="divider"></div>

                <SocialItemGroup/>
            </nav>
        )
    }
}

export default MainNav;