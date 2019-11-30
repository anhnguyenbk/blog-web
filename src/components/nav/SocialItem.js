import React from "react";

class SocialItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.linkTo} target="_blank" className="social-icon-link w-inline-block">
                <img src={this.props.iconSrc} width="25" alt={this.props.iconAlt}/>
            </a>

        )
    }
}

export default SocialItem;