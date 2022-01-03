const Footer = () => {
  return (
    <>
      {/* <!-- footer Start --> */}
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Company</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Quick Links</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Socials</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 ml-auto col-sm-6">
              <div className="widget">
                <div className="logo mb-4">
                  <h3>
                    Noble<span>Jet.</span>
                  </h3>
                </div>
                <h6>
                  <a href="tel:+23-345-67890">support@noblejet.com</a>
                </h6>
                <a href="mailto:support@gmail.com">
                  <span className="text-color h4">+23-456-6588</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright">
                  &copy; Copyright Reserved to{" "}
                  <span className="text-color">NobleJet.</span> by{" "}
                  <a
                    href="https://themefisher.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Themefisher
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-left text-lg-right d-none">
                <ul className="list-inline footer-socials">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/themefisher">
                      <i className="ti-facebook mr-2"></i>Facebook
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/themefisher">
                      <i className="ti-twitter mr-2"></i>Twitter
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.pinterest.com/themefisher/">
                      <i className="ti-linkedin mr-2 "></i>Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
