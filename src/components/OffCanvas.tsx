import React from "react";
interface props {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas: React.FC<props> = ({ setShowOffcanvas, showOffcanvas }) => {
  return (
    <React.Fragment>
      <div className={`extra-info ${showOffcanvas ? "active" : ""}`}>
        <div className="close-icon menu-close">
          <button onClick={() => setShowOffcanvas((p) => !p)}>
            <i className="las la-window-close"></i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <a href="index.html" className="site-logo-2">
            <img src="/assets/img/logo-white.png" alt="" />
          </a>
        </div>
        <div className="side-info">
          <div className="contact-list mb-40">
            <h4>O nas</h4>
            <p>
              We must explain to you how all seds this mistakens idea off
              denouncing pleasures and praising pain was born and I will give
              you a completed accounts of the system and expound.
            </p>
            <div className="mt-30 mb-30">
              <a href="contact.html" className="main-btn">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="contact-list mb-40">
            <h4>Contact Info</h4>
            <p>
              <i className="las la-rocket"></i>
              <span>
                al.Legionów 19, 08-400, Garwolin
              </span>
            </p>
            <p>
              <i className="las la-phone"></i> <span> +48 530-114-220</span>
            </p>
            <p>
              <i className="las la-envelope-open"></i>
              <span>zurb.parol@op.pl</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`offcanvas-overly ${showOffcanvas ? "active" : ""}`} onClick={() => setShowOffcanvas((p) => !p)}></div>
    </React.Fragment>
  );
};

export default OffCanvas;
