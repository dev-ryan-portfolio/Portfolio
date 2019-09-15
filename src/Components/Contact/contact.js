import React from "react";
import { sendMail } from "../../Api/mailer.js";
import htmlEscape from "../../Util/htmlEscape.js";

const { detect } = require("detect-browser");
const getFileType = () => {
    if (detect().name === "safari") {
        return "ContactBackground.jpg";
    } else {
        return "ContactBackground.webp";
    }
};
const ContactBackground = require("../../Images/" + getFileType());

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validation: {
                name: null,
                email: null,
                subject: null,
                message: null
            },
            value: {
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        };
        this.validateField = this.validateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateField(e) {
        let field = e.target.name;
        let valid = false;
        let value = e.target.value;
        if (value !== "" && value !== null) {
            switch (field) {
                case "name":
                    valid = /(-?([A-Z].\s)?([A-Z]+)\s?)+([A-Z]'([A-Z]+))?/gi.test(
                        value
                    );
                    break;
                case "email":
                    valid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
                        value
                    );
                    break;
                default:
                    valid = true;
            }
        }
        this.setState({
            validation: {
                ...this.state.validation,
                [field]: valid
            },
            value: {
                ...this.state.value,
                [field]: value
            }
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (Object.values(this.state.validation).every(e => e === true)) {
            this.props.addSnackbar(
                await sendMail({
                    from:
                        '"Portfolio Contact Form" <mailer.service2@gmail.com>',
                    to: "RyanCallahan312@gmail.com",
                    subject: `Portfolio Contact Form: ${this.state.value.subject}`,
                    text: `From: ${this.state.value.name} at ${this.state.value.email}\nSubject: ${this.state.value.subject}\nMessage: ${this.state.value.message}`,
                    html: `
				<h1><u>Contact Details</u></h1>
				<ul>
				<li>Name: ${htmlEscape(this.state.value.name)}</li>
				<li>Email: ${htmlEscape(this.state.value.email)}</li>
				</ul>
				<h1><u>Message</u></h1>
				<h3>${htmlEscape(this.state.value.subject)}</h3>
				<p>${htmlEscape(this.state.value.message)}</p>`
                })
            );
            this.setState({
                validation: {
                    name: null,
                    email: null,
                    subject: null,
                    message: null
                },
                value: {
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                }
            });
        }
    }

    render() {
        const styles = {
            background: {
                background: `url("${ContactBackground}")`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                overflowX: "hidden",
                overflowY: "auto",
                height: "100vh",
                width: "100%"
            },
            contactForm: {
                display: "block",
                textAlign: "left",
                padding: "2% 5% 5%"
            },
            inputContainer: {
                margin: 20
            },
            inputLabel: {
                margin: "5px auto 5px 10% ",
                fontFamily: "Slabo 27px'",
                fontSize: "32px",
                userSelect: "none",
                color: "white"
            },
            inputTextBox: {
                textAlign: "left",
                padding: 5,
                margin: "0px 10% 0px 10% ",
                width: "80%",
                borderRadius: "10px",
                boxShadow: "0px 4px 2px 1px rgba(0,0,0,0.4)",
                border: "4px solid black",
                overflow: "autos",
                resize: "none",
                outline: "none",
                fontSize: "20px",
                fontWeight: 500,
                fontFamily: "Roboto"
            },
            inputSubmit: {
                float: "right",
                margin: "10px 9% 0px 0px",
                minHeight: "20px",
                minWidth: "100px",
                height: "4vh",
                width: "10vw",
                background: "rgba(147, 224, 255, 1)",
                border: "1px solid black",
                outline: "none",
                cursor: "pointer",
                fontSize: "calc(16px + .5vmax)",
                fontWeight: 1000,
                fontFamily: "Open Sans",
                color: "rgba(0, 0, 0, .76)",
                userSelect: "none",
                borderRadius: "10px",
                filter: "none"
            },
            inputInvalid: {
                border: "4px solid red"
            },
            messageField: {
                height: "30vh"
            },
            disabled: {
                filter: "grayscale(100%)",
                cursor: "default"
            }
        };

        const disableSubmit = !Object.values(this.state.validation).every(
            field => field === true
        );

        return (
            <div style={styles.background}>
                <form style={styles.contactForm} onSubmit={this.handleSubmit}>
                    <div style={styles.inputContainer}>
                        <label style={styles.inputLabel} htmlFor="name">
                            Name
                        </label>
                        <br style={{ userSelect: "none" }} />
                        <input
                            style={
                                this.state.validation.name === false
                                    ? {
                                          ...styles.inputTextBox,
                                          ...styles.inputInvalid
                                      }
                                    : styles.inputTextBox
                            }
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.validateField}
                            onBlur={this.validateField}
                            title={
                                this.state.value.name === null ||
                                this.state.value.name === ""
                                    ? "This field is required"
                                    : this.state.validation.name === false
                                    ? "Please enter a valid name"
                                    : ""
                            }
                            value={this.state.value.name}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.inputLabel} htmlFor="email">
                            Email
                        </label>
                        <br style={{ userSelect: "none" }} />
                        <input
                            style={
                                this.state.validation.email === false
                                    ? {
                                          ...styles.inputTextBox,
                                          ...styles.inputInvalid
                                      }
                                    : styles.inputTextBox
                            }
                            type="text"
                            id="email"
                            name="email"
                            onChange={this.validateField}
                            onBlur={this.validateField}
                            title={
                                this.state.value.email === null ||
                                this.state.value.email === ""
                                    ? "This field is required"
                                    : this.state.validation.email === false
                                    ? "Please enter a valid email"
                                    : ""
                            }
                            value={this.state.value.email}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.inputLabel} htmlFor="subject">
                            Subject
                        </label>
                        <br style={{ userSelect: "none" }} />
                        <input
                            style={
                                this.state.validation.subject === false
                                    ? {
                                          ...styles.inputTextBox,
                                          ...styles.inputInvalid
                                      }
                                    : styles.inputTextBox
                            }
                            type="text"
                            id="subject"
                            name="subject"
                            onChange={this.validateField}
                            onBlur={this.validateField}
                            title={
                                this.state.value.subject === null ||
                                this.state.value.subject === "" ||
                                this.state.validation.subject === false
                                    ? "This field is required"
                                    : ""
                            }
                            value={this.state.value.subject}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.inputLabel} htmlFor="message">
                            Message
                        </label>
                        <br style={{ userSelect: "none" }} />
                        <textarea
                            className="invisible-scrollbar"
                            style={
                                this.state.validation.message === false
                                    ? {
                                          ...styles.inputTextBox,
                                          ...styles.messageField,
                                          ...styles.inputInvalid
                                      }
                                    : {
                                          ...styles.inputTextBox,
                                          ...styles.messageField
                                      }
                            }
                            id="message"
                            name="message"
                            onChange={this.validateField}
                            onBlur={this.validateField}
                            title={
                                this.state.value.message === null ||
                                this.state.value.email === "" ||
                                this.state.validation.message === false
                                    ? "This field is required"
                                    : ""
                            }
                            value={this.state.value.message}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input
                            style={
                                disableSubmit
                                    ? {
                                          ...styles.inputSubmit,
                                          ...styles.disabled
                                      }
                                    : styles.inputSubmit
                            }
                            type="submit"
                            value="SUBMIT"
                            disabled={disableSubmit}
                            title={
                                disableSubmit
                                    ? "Please fix errors before submitting"
                                    : "Send Contact Info"
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
