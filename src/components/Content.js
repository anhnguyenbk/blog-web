import React from "react";
import Posts from "./Posts";

class Content extends React.Component {
    render() {
        return(
            <div className="content">
                <Posts />
            </div>
        )
    }
}

export default Content;