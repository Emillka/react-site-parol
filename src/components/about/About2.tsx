import React from "react";
import { Link } from "react-router-dom";

const About2: React.FC = () => {
  return (
    <React.Fragment>
      <div className="about-area about-two section-padding pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="info-img">
                <img src="/assets/img/about/about-1.png" alt="" />
                <div className="founded-year">
                  <i className="flaticon-factory">Founded in 1995</i>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="about-content-area">
                <div className="section-title">
                  <h6>O nas</h6>
                  <h2>
                  <b> Doświadczenie</b> od 1995 roku
                  </h2>
                </div>

                <p>
                PAROL Zakład Usługowo-Remontowo Budowlany Jerzy Parol to firma z wieloletnim doświadczeniem, działająca na rynku od 1995 roku. Specjalizujemy się w kompleksowych usługach remontowo-budowlanych, obejmujących m.in. budowę budynków mieszkalnych i niemieszkalnych, roboty drogowe, prace ziemne, rozbiórki oraz instalacje elektryczne. 
                </p>
                <br />

                <p>
                Dzięki szerokiemu zapleczu technicznemu oferujemy wynajem nowoczesnego sprzętu budowlanego, takiego jak dźwigi, koparki czy wózki podnośnikowe, dopasowanego do potrzeb każdego projektu. Naszym priorytetem jest terminowość, jakość oraz zadowolenie Klientów, którzy są najlepszą wizytówką naszej firmy. Zapraszamy do współpracy!
                </p>

                <ul className="about-key mt-30">
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Best Industrial</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Quality Construction</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Expert Contractor</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Affordable Cost Rate</p>
                  </li>
                </ul>
                <div className="about-contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="call-us d-flex mt-30">
                          <div className="icon">
                            <i className="las la-phone"></i>
                          </div>
                          <div className="mobile-number">
                            <h5>Call Us Anytime</h5>
                            <p>92 666 888 0000</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link to="/o-nas" className="main-btn">
                          Czytaj więcej
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About2;
