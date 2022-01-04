/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="NOBLE JET DVP AND MGT LTD" />

        <meta name="author" content="Noble jet Dvp and Mgt Ltd" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#DA70D6" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@olabiranjoshua" />
        <meta property="og:title" content="Joshua Olabiran" />
        <meta property="og:description" content="Noble jet Dvp and Mgt Ltd" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
          property="og:image"
          content="https://njdm.vercel.app/images/bg/home-1.jpg"
        />
        <meta
          name="twitter:image"
          content="https://njdm.vercel.app/images/bg/home-1.jpg"
        />

        <title>NobleJet - Contact</title>
      </Head>

      <body>
        <Navbar />
        <div className="main-wrapper">
          <section className="page-title bg-1">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Contact Us</span>
                    <h1 className="text-capitalize mb-4 text-lg">
                      Get in Touch
                    </h1>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="index.html" className="text-white">
                          Home
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <span className="text-white">/</span>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-white-50">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- contact form start --> */}
          <section className="contact-form-wrap section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <form
                    id="contact-form"
                    className="contact__form"
                    method="post"
                    action="mail.php"
                  >
                    {/* <!-- form message --> */}
                    <div className="row d-none">
                      <div className="col-12">
                        <div
                          className="alert alert-success contact__msg"
                          role="alert"
                        >
                          Your message was sent successfully.
                        </div>
                      </div>
                    </div>
                    {/* <!-- end message --> */}
                    <span className="text-color">Send a message</span>
                    <h3 className="text-md mb-4">Contact Form</h3>
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group-2 mb-4">
                      <textarea
                        name="message"
                        className="form-control"
                        rows={4}
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-main"
                      name="submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="col-lg-5 col-sm-12">
                  <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                    <span className="text-muted">We are Professionals</span>
                    <h2 className="mb-5 mt-2">
                      Don’t Hesitate to contact with us for any kind of
                      information
                    </h2>

                    <ul className="address-block list-unstyled">
                      <li>
                        <i className="ti-direction mr-3"></i>10 Oje Apon St,
                        Lagos.
                      </li>
                      <li>
                        <i className="ti-email mr-3"></i>Email: contact@mail.com
                      </li>
                      <li>
                        <i className="ti-mobile mr-3"></i>Phone:+88 01672 506
                        744
                      </li>
                    </ul>

                    <ul className="social-icons list-inline mt-5">
                      <li className="list-inline-item">
                        <a href="http://www.themefisher.com">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="http://www.themefisher.com">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="http://www.themefisher.com">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="google-map">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.8729156692157!2d3.2360509073121015!3d6.545899797878571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85156920d56d%3A0x559594c2175a41f6!2s10%20Oje%20Apon%20St%2C%20Ijegun%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1641252106757!5m2!1sen!2sng"
                height="450"
                style={{ border: 0, width: "100vw" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </>
  );
};

export default Contact;
