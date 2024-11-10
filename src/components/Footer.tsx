import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img src="/assets/img/logo-white.png" alt="industrify-logo" />
              </a>
              <p>
                Consectetur adipisicing elit. <br />
                maxime dolor voluptatibus natus eligendi
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Office</h5>
              <p>
               al.Legionów 19 <br />
               08-400, Garwolin
              </p>
              <div className="company-email">
                <a href="#">zurb.parol@op.pl</a>
              </div>
              <div className="phone-number">
                <p> +48 530-114-220</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/o-nas">O nas</Link>
                  <Link to="/uslugi">Usługi</Link>
                  <Link to="/realizacje">Realizacje</Link>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
