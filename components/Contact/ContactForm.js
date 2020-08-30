import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form pb-100">
        <h2>Napisz Do Nas</h2>

        <form id="contactForm">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Imię"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="form-control"
                    placeholder="Telefon"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    placeholder="Temat"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="8"
                    placeholder="Wiadomość"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button type="submit" className="btn btn-primary">
                  Wyślij Wiadomość
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
