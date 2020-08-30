import React, { Component } from "react";
import Link from "next/link";

class OurServices extends Component {
  render() {
    return (
      <div className="ptb-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Nasze Usługi</h2>
            <p>
              Sprawdź co możemy dla Ciebie zrobić. Zajmujemy się kompleksową
              realizacją wszelkich projektów internetowych. Tworzymy responsywne
              strony internetowe (RWD), serwisy firmowe, portale, blogi, sklepy
              www oraz rozbudowane aplikacja internetowe.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-fcfbfb text-center">
                <i className="pe-7s-display2 bg-6610f2"></i>
                <h3>Strony WWW</h3>
                <p>
                  Kompleksowa realizacja estetycznych i przejrzystych stron WWW
                  według najnowszych trendów web designu.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-fcfbfb text-center">
                <i className="pe-7s-phone bg-fc3549"></i>
                <h3>Web Aplikacje</h3>
                <p>
                  Indywidualnie zaprojektowane aplikacje internetowe dostosowane
                  do potrzeb i wymagań klienta.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-fcfbfb text-center">
                <i className="pe-7s-cart bg-00d280"></i>
                <h3>Sklepy Internetowe</h3>
                <p>
                  Projektujemy, budujemy, wdrażamy i obsługujemy sklepy
                  internetowe PrestaShop, OpenCart i WooCommerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
