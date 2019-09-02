import React from "react";
import { sendMail } from "../../Api/mailer.js";
import htmlEscape from "../../Util/htmlEscape.js";

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
        name: null,
        email: null,
        subject: null,
        message: null
      }
    };
    this.validateField = this.validateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateField(e) {
    let field = e.target.name;
    let valid = false;
    let value = e.target.value;
    if (value) {
      switch (field) {
        case "name":
          valid = /(-?([A-Z].\s)?([A-Z]+)\s?)+([A-Z]'([A-Z]+))?/gi.test(value);
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
      sendMail({
        from: '"Portfolio Contact Form" <mailer.service2@gmail.com>',
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
      });
    }
  }

  render() {
    console.log(this.state);
    const styles = {
      contactForm: {
        display: "block",
        textAlign: "left",
        padding: "8% 10% 0 10%"
      },
      inputContainer: {
        margin: 20
      },
      inputLabel: {
        margin: "5px auto 5px 10% ",
        fontFamily: "Slabo 27px'",
        fontSize: "27px",
        userSelect: "none"
      },
      inputTextBox: {
        textAlign: "center",
        padding: 10,
        margin: "5px 10% 5px 10% ",
        width: "80%",
        borderRadius: "10px",
        boxShadow: "0px 4px 2px 1px rgba(0,0,0,0.4)",
        border: "2px solid black"
      },
      inputSubmit: {
        float: "right"
      },
      inputInvalid: {
        border: "2px solid red"
      }
    };

    return (
      <form style={styles.contactForm} onSubmit={this.handleSubmit}>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel} htmlFor="name">
            Name
          </label>
          <br style={{ userSelect: "none" }} />
          <input
            style={styles.inputTextBox}
            type="text"
            id="name"
            name="name"
            onBlur={this.validateField}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel} htmlFor="email">
            Email
          </label>
          <br style={{ userSelect: "none" }} />
          <input
            style={styles.inputTextBox}
            type="text"
            id="email"
            name="email"
            onBlur={this.validateField}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel} htmlFor="subject">
            Subject
          </label>
          <br style={{ userSelect: "none" }} />
          <input
            style={styles.inputTextBox}
            type="text"
            id="subject"
            name="subject"
            onBlur={this.validateField}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel} htmlFor="message">
            Message
          </label>
          <br style={{ userSelect: "none" }} />
          <input
            style={styles.inputTextBox}
            type="text"
            id="message"
            name="message"
            onBlur={this.validateField}
          />
        </div>
        <div style={styles.inputContainer}>
          <input style={styles.inputSubmit} type="submit" value="submit" />
        </div>
        <p>hahhahhhhah</p>
      </form>
    );
  }
}
