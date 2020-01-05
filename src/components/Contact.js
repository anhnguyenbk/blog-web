import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="content">
                <div>
                    <div className="body-copy w-richtext"><h1>Get in touch</h1>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna
                            mollis
                            euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque
                            ornare sem
                            lacinia quam venenatis vestibulum.</p></div>
                    <div className="form-wrapper w-form">
                        <form id="email-form" name="email-form" data-name="Email Form">

                            <label htmlFor="Name">Name</label>

                            <input
                                type="text" id="Name" name="Name" data-name="Name" placeholder="Enter your name"
                                maxLength="256"
                                className="text-field w-input"/>

                            <label htmlFor="Email">Email Address</label>

                            <input
                                type="email" id="Email"
                                name="Email"
                                data-name="Email"
                                placeholder="Enter your email address"
                                maxLength="256"
                                required=""
                                className="text-field w-input"/>

                            <label
                                htmlFor="Message">Message</label>

                            <textarea id="Message" name="Message"
                                      placeholder="Enter your message"
                                      maxLength="5000" data-name="Message" required=""
                                      className="text-field text-area w-input"></textarea>
                            <input type="submit" value="Submit" data-wait="Please wait..." className="button w-button"/>

                        </form>
                        <div className="success-message w-form-done"><p className="success-text">Thank you! Your
                            submission has been
                            received!</p></div>
                        <div className="w-form-fail"><p>Oops! Something went wrong while submitting the form</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;