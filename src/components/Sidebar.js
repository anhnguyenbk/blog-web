import React from "react";
import MainNav from "./nav/MainNav";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-column">
                <div data-collapse="medium" data-animation="default" data-duration="400"
                     className="navigation-bar w-nav">
                    <div className="w-container">
                        <a href="/" className="logo-link w-nav-brand"><h1 className="logo-text">Tobi's blog</h1></a>

                        <MainNav/>

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