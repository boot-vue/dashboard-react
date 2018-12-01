import React, {Component} from "react";

class Index extends Component {
    render() {
        return (
            <div>
                index.....
                {this.props.children}
            </div>
        )
    }
}

export default Index;