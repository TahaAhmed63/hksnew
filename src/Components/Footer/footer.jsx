import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 footerimg">
              <a href="https://staging.hksglobalpetroleum.com">
                <img 
                  src="https://staging.hksglobalpetroleum.com/wp-content/uploads/2024/10/HKS-Global-PNG-1-1.png" 
                  alt="HKS Global Petroleum" 
                />
              </a>
            </div>

            <div className="col-lg-5 col-md-6 col-12 footermenu firstft">
              <h2>Contact Info</h2>
              <h4>
                <b>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Address:
                </b>
              </h4>
              <p>Office # 504, 5th Floor Alfalah Tower, Main Jinnah Avenue Commercial Bahria Town - Karachi, Pakistan</p>

              <h4>
                <i className="fab fa-whatsapp" aria-hidden="true"></i> <b>Phone No:</b>
              </h4>
              <p>+92 21 34522200</p>

              <h4>
                <i className="fas fa-envelope" aria-hidden="true"></i> <b>Email:</b>
              </h4>
              <p>info@hksglobal-petroleum.com</p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 footermenu">
              <h2>About Us</h2>
              <ul>
                <li><a href="https://staging.hksglobalpetroleum.com/about-us/">About Us</a></li>
                <li><a href="https://staging.hksglobalpetroleum.com/shop/">Shop</a></li>
                <li><a href="https://staging.hksglobalpetroleum.com/careers/">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="https://staging.hksglobalpetroleum.com/contact-us/">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 col-12 footermenu">
              <h2>Subscribe</h2>
              <p className="mb-3">Don’t miss our future updates. Subscribe today!</p>

              <div className="footer-input">
                <form className="form-inline">
                  <div className="mc4wp-form-fields col-md-12">
                    <input 
                      type="email" 
                      id="email" 
                      className="email" 
                      name="EMAIL" 
                      placeholder="Enter e-mail address" 
                      required 
                    />
                    <button className="btn mt-2 mb-2 submit subscribe" type="submit">SUBSCRIBE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="copyright">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 footer-info">
              <p>
                © 2024 HKS Global Petroleum. All Rights Reserved. Powered By 
                <a href="https://www.youronlineconversation.com/" target="_blank" rel="noopener noreferrer">
                  <span style={{ color: '#AD5DAB' }}>Y</span>
                  <span style={{ color: '#34BCED' }}>O</span>
                  <span style={{ color: '#79CA88' }}>C</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;


