import React, { Component } from "react";
import { withRouter } from "react-router-dom";    

export default withRouter(class Contact extends Component {
    handleGoBack() {
        this.props.history.goBack()
    }

    render() {
        return (
            <>
                <h1>Contact</h1>
                <button onClick={() => this.handleGoBack()}>
                    {" "}
                    <strong>{"< "} Back</strong>
                </button>
            </>
        )
    }
})
