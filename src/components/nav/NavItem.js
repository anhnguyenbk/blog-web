import React from "react";

class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.linkTo} className="nav-link w-nav-link">{this.props.children}</a>
        )
    }
}

export default NavItem;