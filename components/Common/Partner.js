import React, { Component } from "react";
import Link from "next/link";

class Partner extends Component {
  render() {
    return (
      <section className="partner-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Wykorzystywane Technologie</h2>
            <p>
              Nasze projekty realizujemy przy wykorzystaniu następujących
              technologii:
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <img
                  src="/images/technologies/react-w100-h100.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <img
                  src="images/technologies/gatsbyjs-w100-h100.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <img
                  src="images/technologies/wordpress-w100-h100.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <img
                  src="images/technologies/bootstrap-w100-h100.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <img
                  src="images/technologies/spring-w100-h100.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <img src="images/technologies/aws-w100-h100.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;
