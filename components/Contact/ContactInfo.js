import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>E-Mail</h3>
                <p>kontakt@on-site.agency</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Telefon</h3>
                <p>+48 730 330 048</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
