import React, { Component } from "react";
import Link from "next/link";

class PricingStyleThree extends Component {
  render() {
    return (
      <section className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Popularne Usługi - Cennik</h2>
            <p>Cennik Projektowania Stron i Sklepów Internetowych:</p>
          </div>

          <div className="row">
            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>Strona WWW - "One-Page"</h3>
                </div>

                <div className="price">
                  <sup>od</sup> 500 <sub>zł</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="icofont-check-circled"></i>
                    Strona Typu "One-Page" (Wizytówka),
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Responsive Design (RWD)
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Hosting + Certyfikat SSL w Pakiecie,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Podstawowa Optymalizacja SEO,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>Integracja z Google
                    Maps,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Konta e-mail,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Wsparcie Techniczne,
                  </li>
                </ul>

                {/*                 <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Szczegóły</a>
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>Strona WWW - "Standard"</h3>
                </div>

                <div className="price">
                  <sup>od</sup> 800 <sub>zł</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="icofont-check-circled"></i>
                    Strona Główna + 4 Podstrony,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Responsive Design (RWD),
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Hosting + Certyfikat SSL w Pakiecie,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Podstawowa Optymalizacja SEO,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Integracja z Google Maps,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Konta e-mail,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Wsparcie Techniczne,
                  </li>
                </ul>

                {/*                 <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Szczegóły</a>
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>Sklep Internetowy - "Basic"</h3>
                </div>

                <div className="price">
                  <sup>od</sup> 1600<sub> zł</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="icofont-check-circled"></i>
                    Nowoczesny Silnik Sklepu,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Indywidualnie Dopasowany Szablon,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Responsive Design (RWD),
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Hosting + Certyfikat SSL w Pakiecie
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Podstawowa Optymalizacja SEO,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Konta e-mail,
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Wsparcie Techniczne,
                  </li>
                </ul>

                {/*                 <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Szczegóły</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingStyleThree;
