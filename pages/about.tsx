/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";

const About: NextPage = () => {
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

        <title>NobleJet - About</title>
      </Head>

      <body>
        <Navbar />

        {/* <!-- Header Close -->  */}

        <div className="main-wrapper ">
          <section className="page-title bg-1">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">About Us</span>
                    <h1 className="text-capitalize mb-4 text-lg">
                      Our Company
                    </h1>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link href="/">
                          <a className="text-white">Home</a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <span className="text-white">/</span>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-white-50">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Section About Start --> */}
          <section className="section about-2 position-relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-item pr-3 mb-5 mb-lg-0">
                    <span className="h6 text-color">What we are</span>
                    <h2 className="mt-3 mb-4 position-relative content-title">
                      We are dynamic team of creative people
                    </h2>
                    <p className="mb-5">
                      We provide consulting services in the area of IFRS and
                      management reporting, helping companies to reach their
                      highest level. We optimize business processes, making them
                      easier.
                    </p>

                    {/* <a href="#" className="btn btn-main btn-round-full">
                      Get started
                    </a> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-item-img">
                    <Image
                      src="/images/team/team.jpeg"
                      alt=""
                      className="img-fluid"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Section About End --> */}

          <section className="about-info section pt-0">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="slide-left"
                  data-aos-duration="2000"
                >
                  <div className="about-info-item mb-4 mb-lg-0">
                    <h3 className="mb-3">
                      <span className="text-color mr-2 text-md ">01.</span>Our
                      Mission
                    </h3>
                    <p>
                      To help people reach their maximum academic,business and
                      leadership potentials through innovative thinking and
                      training.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos-duration="1000"
                >
                  <div className="about-info-item mb-4 mb-lg-0">
                    <h3 className="mb-3">
                      <span className="text-color mr-2 text-md">02.</span>
                      Vission
                    </h3>
                    <p>
                      Building the world influential leaders in all facets of
                      life
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="slide-right"
                  data-aos-duration="2000"
                >
                  <div className="about-info-item mb-4 mb-lg-0">
                    <h3 className="mb-3">
                      <span className="text-color mr-2 text-md">03.</span>Target
                      audience
                    </h3>
                    <p>Young people</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- section Counter Start --> */}
          <section className="section counter bg-counter">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-up"
                  data-aos-duration="2000"
                >
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <i className="ti-check color-one text-md"></i>
                    <h3 className="mt-2 mb-0 text-white">
                      <span className="counter-stat font-weight-bold">
                        1730
                      </span>{" "}
                      +
                    </h3>
                    <p className="text-white-50">Project Done</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                >
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <i className="ti-flag color-one text-md"></i>
                    <h3 className="mt-2 mb-0 text-white">
                      <span className="counter-stat font-weight-bold">
                        125{" "}
                      </span>
                      M{" "}
                    </h3>
                    <p className="text-white-50">User Worldwide</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-down"
                  data-aos-duration="1000"
                >
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <i className="ti-layers color-one text-md"></i>
                    <h3 className="mt-2 mb-0 text-white">
                      <span className="counter-stat font-weight-bold">39</span>
                    </h3>
                    <p className="text-white-50">Availble Country</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-down"
                  data-aos-duration="2000"
                >
                  <div className="counter-item text-center">
                    <i className="ti-medall color-one  text-md"></i>
                    <h3 className="mt-2 mb-0 text-white">
                      <span className="counter-stat font-weight-bold">14</span>
                    </h3>
                    <p className="text-white-50">Award Winner </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section Counter End  --> */}
          {/* <!--  Section Services Start --> */}
          <section className="section team">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div className="section-title">
                    <span className="h6 text-color">Our Team</span>
                    <h2 className="mt-3 content-title">
                      Expert Team member to get best service
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="team-item-wrap mb-5">
                    <div className="team-item position-relative">
                      <img
                        src="images/team/team-2.jpg"
                        alt=""
                        className="img-fluid w-100"
                      />
                      <div className="team-img-hover">
                        <ul className="team-social list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="facebook">
                              <i
                                className="fab fa-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="twitter">
                              <i
                                className="fab fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="instagram">
                              <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="linkedin">
                              <i
                                className="fab fa-linkedin-in"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-item-content">
                      <h4 className="mt-3 mb-0 text-capitalize">Jason roy</h4>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="team-item-wrap mb-5">
                    <div className="team-item position-relative">
                      <img
                        src="images/team/muf.jpg"
                        alt=""
                        className="img-fluid w-100"
                      />
                      <div className="team-img-hover">
                        <ul className="team-social list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="facebook">
                              <i
                                className="fab fa-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="twitter">
                              <i
                                className="fab fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="instagram">
                              <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="linkedin">
                              <i
                                className="fab fa-linkedin-in"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-item-content">
                      <h4 className="mt-3 mb-0 text-capitalize">
                        Mufutau Ogundare
                      </h4>
                      <p>CEO, NobleJet DVP & MGT LTD</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="team-item-wrap mb-5 ">
                    <div className="team-item position-relative">
                      <img
                        src="images/team/team-3.jpg"
                        alt=""
                        className="img-fluid w-100"
                      />
                      <div className="team-img-hover">
                        <ul className="team-social list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="facebook">
                              <i
                                className="fab fa-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="twitter">
                              <i
                                className="fab fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="instagram">
                              <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="linkedin">
                              <i
                                className="fab fa-linkedin-in"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-item-content">
                      <h4 className="mt-3 mb-0 text-capitalize">
                        Henry oswald
                      </h4>
                      <p>Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--  Section Services End --> */}

          <Footer />
        </div>
      </body>
    </>
  );
};

export default About;
