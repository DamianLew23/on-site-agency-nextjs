import React, { Component } from "react";

class ServiceStyleTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="service-style-two ptb-100 bg-fcfbfb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-info pr-50">
                  <div className="info-head">
                    <h2 className="title">Strony WWW</h2>
                    <p>
                      Dzięki wykorzystaniu frameworka Gatsby JS projektowane
                      przez nas strony wyróżniają się szybkością działania,
                      łatwością indeksowania przez wyszukiwarki internetowe,
                      pełną responsywnością oraz możliwością szybkiej edycji
                      treści przez użytkownika przy użyciu popularnych systemów
                      CMS.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Pełna Responsywność
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Szybkość Działania
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Intuicyjny System CMS
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Optymalizacja SEO
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Indywidualny Projekt
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        UI / UX
                      </div>
                    </div>
                  </div>

                  {/*                   <div className="service-read-more">
                    <Link href="#">
                      <a className="btn btn-primary">
                        <i className="icofont-tasks"></i> Czytaj Więcej
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-right-img">
                  <img
                    src="/images/services/it-service1.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-style-two ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-left-img">
                  <img
                    src="/images/services/it-service3.png"
                    alt="Service Image"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-info pl-50">
                  <div className="info-head">
                    <h2 className="title">Web Aplikacje</h2>
                    <p>
                      Prosta strona www to dla Ciebie za mało? Potrzebujesz
                      rozbudowanej aplikacji internetowej dopasowanej do
                      indywidualnych wymagań? Śmiało - skontaktuj się z nami,
                      opisz swój projekt, a my go dla Ciebie zaprojektujemy,
                      zbudujemy i wdrożymy.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        React Development
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Java Development
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        AWS Cloud
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        GatsbyJS
                      </div>
                      <div className="feature-list">
                        <i className="icofont-check-circled"></i>
                        Rest API
                      </div>
                    </div>
                  </div>

                  {/*                   <div className="service-read-more">
                    <Link href="#">
                      <a className="btn btn-primary">
                        <i className="icofont-tasks"></i> Czytaj Więcej
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiceStyleTwo;
