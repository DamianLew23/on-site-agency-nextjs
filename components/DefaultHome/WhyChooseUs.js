import React, { Component } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

class WhyChooseUs extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="about-area ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two pl-0 mt-0">
                <div className="section-title">
                  <h2>Dlaczego Warto Skorzystać z Naszej Oferty?</h2>
                  <p>
                    Nasze strony projektujemy korzystając z nowoczesnego
                    frameworka Gatsby JS, którego działanie opiera się na
                    podstawie React'a oraz GraphQL. Takie połączenie zapewnia
                    opytmalizację kodu strony internetowej, dzięki czemu strona
                    uruchamia się szybko niezależnie od urządzenia, na którym
                    zostanie otwarta.
                  </p>
                </div>

                <div className="about-text">
                  <h4>React & GatsbyJS</h4>
                  <p>
                    Połączenie możliwości biblioteki React i Frameworka GatsbyJS
                    w naszych projektach oferuje następujące zalety:
                  </p>
                  <ul>
                    <li>
                      Szybkość działania zauważalna zarówno podczas ładowania,
                      jak również nawigowania pomiędzy zakładkami,
                    </li>
                    <li>Pełne indeksowanie przez wyszukiwarki internetowe,</li>
                    <li>
                      Wyższy poziom bezpieczeństwa, w porównaniu do tradycyjnych
                      systemów CMS,
                    </li>
                    <li>
                      Możliwość wygodnego zarządzania treścią strony przez
                      użytkownika,
                    </li>
                    <li>
                      Niskie koszty utrzymania strony, wynikające z faktu że
                      serwerze umieszane są jedynie statyczne plik HTML, CSS i
                      JS,
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="about-image right-image">
                <img
                  src="/images/about-img3.jpg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </section>
    );
  }
}

export default WhyChooseUs;
