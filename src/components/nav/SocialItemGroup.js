import React from "react";
import SocialItem from "./SocialItem";
import facebookIcon from "../../assets/icons/social-03-white.svg";
import twitterIcon from "../../assets/icons/social-18-white.svg";
import githubIcon from "../../assets/icons/social-33-white.svg";
import linkedinIcon from "../../assets/icons/social-09-white.svg";

class SocialItemGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social-link-group">
                <SocialItem linkTo="https://fb.com/beodn" iconSrc={facebookIcon} iconAlt="Facebook" />
                <SocialItem linkTo="#" iconSrc={twitterIcon} iconAlt="Twitter" />
                <SocialItem linkTo="https://github.com/anhnguyenbk" iconSrc={githubIcon} iconAlt="Github" />
                <SocialItem linkTo="#" iconSrc={linkedinIcon} iconAlt="Linkedin" />
            </div>
        )
    }
}

export default SocialItemGroup;