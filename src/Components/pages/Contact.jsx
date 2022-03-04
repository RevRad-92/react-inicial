import React from "react";
import { useHistory } from "react-router-dom"

const Contact = () => {
    // handleGoBack() {
    //     this.props.history.goBack()
    // }

    const history = useHistory();



    return (
        <>
            <h1>Contact</h1>
            {/* goBack ahora por medio de useHistory */}
            <button onClick={() => history.goBack()}>
                {" "}
                <strong>{"< "} Back</strong>
            </button>
        </>
    )
}

export default Contact;
