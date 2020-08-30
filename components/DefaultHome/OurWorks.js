import React, { Component } from "react";
import Link from "next/link";

class OurWorks extends Component {
  render() {
    return (
      <section className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Nasze Ostatnie Realizacje</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-studies bg3">
                <div className="content">
                  <span>Wordpress Page</span>
                  <h3>PoradyZakupowe.pl</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-case-studies bg2">
                <div className="content">
                  <span>Wordpress Page</span>
                  <h3>Pasko-AutoSerwis.pl</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-case-studies bg1">
                <div className="content">
                  <span>Angular App</span>
                  <h3>DobierzFalownik.pl</h3>
                </div>
              </div>
            </div>
          </div>

          {/*           <div className="view-more-work">
            <Link href="/portfolio">
              <a className="btn btn-primary">
                Zobacz Więcej Naszych Realizacji
              </a>
            </Link>
          </div> */}
        </div>
      </section>
    );
  }
}

export default OurWorks;
