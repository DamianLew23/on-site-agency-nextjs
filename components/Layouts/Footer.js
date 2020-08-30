import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/images/on-site-agency-logo-h40.png"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <p>
                  Odwiedź nasze profile społecznosciowe FB, Instagram, Twitter i
                  LinkedIn. Potrzebujesz pomocy? Skontaktuj się z nami.
                </p>

                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4 pl-5">
                <h3>Nasze Usługi</h3>

                <ul className="list">
                  <li>Strony WWW</li>
                  <li>Aplikacje Internetowe</li>
                  <li>Sklepy Internetowe</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ml-4">
                {/* <h3>Linki</h3>

                <ul className="list">
                  <li>
                    <Link href="/contact">
                      <a>Kontakt</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a>Cennik</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Faq</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Polityka Prywatności</a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Kontakt</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="icofont-home"></i> Rzeszów, Polska
                  </li>
                  <li>
                    <i className="icofont-live-support"></i> +48 730 330 048
                  </li>
                  <li>
                    <i className="icofont-envelope"></i> kontakt@on-site.agency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              &copy; Copyright {currentYear} On-Site.Agency. Wszystkie Prawa
              Zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
