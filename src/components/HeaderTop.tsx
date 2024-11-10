import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <a href="mailto:zurb.parol@op.pl" style = {{color: 'white', fontSize: '16px'}}>
                  <i className="las la-envelope"></i> zurb.parol@op.pl
                </a>
                <i className="las la-map-marker"></i> al.Legionów 19, 08-400, Garwolin&nbsp; 
                <i className="las la-phone"></i>+48 530-114-220
             
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
              Solidność | Precyzja | Doświadczenie
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderTop;
