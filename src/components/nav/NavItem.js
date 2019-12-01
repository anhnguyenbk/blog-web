import React from "react";
import {Link} from "react-router-dom";

class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={this.props.linkTo} className="nav-link w-nav-link">{this.props.children}</Link>
        )
    }
}

export default NavItem;