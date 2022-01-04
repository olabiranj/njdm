/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
const Home: NextPage = () => {
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

        <title>NobleJet - Home</title>
      </Head>

      <body>
        <Navbar />

        <div className="main-wrapper ">
          {/* <!-- Slider Start --> */}
          <section className="slider">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-10">
                  <div className="block">
                    <span className="d-block mb-3 text-white text-capitalize">
                      NOBLE JET DVP AND MGT LIMITED
                    </span>
                    <Carousel autoplay>
                      <h1 className="animated fadeInUp mb-5">
                        Business <br /> Consultant
                      </h1>
                      <h1 className="animated fadeInUp mb-5">
                        Life <br />
                        Coaching
                      </h1>
                      <h1 className="animated fadeInUp mb-5">
                        Content <br />
                        Creation
                      </h1>
                      <h1 className="animated fadeInUp mb-5">
                        Career <br />
                        Expert
                      </h1>
                      <h1 className="animated fadeInUp mb-5">
                        Career <br />
                        Expert
                      </h1>
                      <h1 className="animated fadeInUp mb-5">
                        Branding <br />
                        Expert
                      </h1>
                    </Carousel>
                    <Link href="/about">
                      <a className="btn btn-main animated fadeInUp btn-round-full">
                        Get started
                        <i className="btn-icon fa fa-angle-right ml-2"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section Intro Start --> */}

          <section className="section intro">
            <div className="container">
              <div className="row ">
                <div className="col-lg-8">
                  <div className="section-title">
                    <span className="h6 text-color ">
                      We are creative & expert people
                    </span>
                    <h2 className="mt-3 content-title">
                      We work with business & provide solution to client with
                      their business problem{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="intro-item mb-5 mb-lg-0">
                    <i className="ti-medall color-one"></i>
                    <h4 className="mt-4 mb-3">Awarded Licensed Company</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odit, ducimus.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="intro-item mb-5 mb-lg-0">
                    <i className="ti-desktop color-one"></i>
                    <h4 className="mt-4 mb-3"> Reliable Consulting Firm</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odit, ducimus.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="intro-item">
                    <i className="ti-layers-alt color-one"></i>
                    <h4 className="mt-4 mb-3">Awarded Licensed Company</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odit, ducimus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Section Intro END --> */}
          {/* <!-- Section About Start --> */}

          <section className="section about position-relative">
            <div className="bg-about"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6 offset-md-0">
                  <div className="about-item ">
                    <span className="h6 text-color">What we are</span>
                    <h2 className="mt-3 mb-4 position-relative content-title">
                      We are dynamic team of creative people
                    </h2>
                    <div className="about-content">
                      <h4 className="mb-3 position-relative">
                        We are Perfect Solution
                      </h4>
                      <p className="mb-5">
                        We provide consulting services in the area of IFRS and
                        management reporting, helping companies to reach their
                        highest level. We optimize business processes, making
                        them easier.
                      </p>

                      <a href="#" className="btn btn-main btn-round-full">
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Section About End --> */}
          {/* <!-- section Counter Start --> */}
          <section className="section counter">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-up"
                  data-aos-duration="2000"
                >
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <h3 className="mb-0">
                      <span className="counter-stat font-weight-bold">
                        1730
                      </span>{" "}
                      +
                    </h3>
                    <p className="text-muted">Project Done</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                >
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <h3 className="mb-0">
                      <span className="counter-stat font-weight-bold">
                        125{" "}
                      </span>
                      M{" "}
                    </h3>
                    <p className="text-muted">User Worldwide</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-down"
                  data-aos-duration="1000"
                >
                  <div className="counter-item text-center mb-5 mb-lg-0">
                    <h3 className="mb-0">
                      <span className="counter-stat font-weight-bold">39</span>
                    </h3>
                    <p className="text-muted">Availble Country</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="slide-down"
                  data-aos-duration="2000"
                >
                  <div className="counter-item text-center">
                    <h3 className="mb-0">
                      <span className="counter-stat font-weight-bold">14</span>
                    </h3>
                    <p className="text-muted">Award Winner </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- section Counter End  --> */}
          <Service />
          {/* <!-- Section Cta Start -->  */}
          <section className="section cta">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cta-item  bg-white p-5 rounded">
                    <span className="h6 text-color">We create for you</span>
                    <h2 className="mt-2 mb-4">
                      Entrust Your Project to Our Best Team of Professionals
                    </h2>
                    <p className="lead mb-4">
                      Have any project on mind? For immidiate support :
                    </p>
                    <h3>
                      <i className="ti-mobile mr-3 text-color"></i>+23 876 65
                      455
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--  Section Cta End--> */}
          {/* <!-- Section Testimonial Start --> */}
          <section className="section testimonial">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 ">
                  <div className="section-title">
                    <span className="h6 text-color">Clients testimonial</span>
                    <h2 className="mt-3 content-title">
                      Check what's our clients say about us
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row testimonial-wrap">
                <div className="testimonial-item position-relative col-md-6">
                  <i className="ti-quote-left text-color"></i>

                  <div className="testimonial-item-content">
                    <p className="testimonial-text">
                      Quam maiores perspiciatis temporibus odio reiciendis error
                      alias debitis atque consequuntur natus iusto recusandae
                      numquam corrupti facilis blanditiis.
                    </p>

                    <div className="testimonial-author">
                      <h5 className="mb-0 text-capitalize">Thomas Johnson</h5>
                      <p>Excutive Director,themefisher</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item position-relative col-md-6">
                  <i className="ti-quote-left text-color"></i>

                  <div className="testimonial-item-content">
                    <p className="testimonial-text">
                      Consectetur adipisicing elit. Quam maiores perspiciatis
                      temporibus odio reiciendis error alias debitis atque
                      consequuntur natus iusto recusandae .
                    </p>

                    <div className="testimonial-author">
                      <h5 className="mb-0 text-capitalize">Mickel hussy</h5>
                      <p>Excutive Director,themefisher</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section Testimonial End --> */}
          <section className="section latest-blog bg-2 d-none">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div className="section-title">
                    <span className="h6 text-color">Latest News</span>
                    <h2 className="mt-3 content-title text-white">
                      Latest articles to enrich knowledge
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="card bg-transparent border-0">
                    <Image
                      src="/images/blog/1.jpg"
                      alt="Picture of the author"
                      className="img-fluid rounded"
                      layout="fill"
                      // width={500} automatically provided
                      // height={500} automatically provided
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />

                    <div className="card-body mt-2">
                      <div className="blog-item-meta">
                        <a href="#" className="text-white-50">
                          Design<span className="ml-2 mr-2">/</span>
                        </a>
                        <a href="#" className="text-white-50">
                          Ui/Ux<span className="ml-2">/</span>
                        </a>
                        <a href="#" className="text-white-50 ml-2">
                          <i className="fa fa-user mr-2"></i>admin
                        </a>
                      </div>

                      <h3 className="mt-3 mb-5 lh-36">
                        <a href="#" className="text-white ">
                          How to improve design with typography?
                        </a>
                      </h3>

                      <a
                        href="blog-single.html"
                        className="btn btn-small btn-solid-border btn-round-full text-white"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="card border-0 bg-transparent">
                    <Image
                      src="/images/blog/2.jpg"
                      alt=""
                      className="img-fluid rounded"
                      layout="fill"
                    />

                    <div className="card-body mt-2">
                      <div className="blog-item-meta">
                        <a href="#" className="text-white-50">
                          Design<span className="ml-2 mr-2">/</span>
                        </a>
                        <a href="#" className="text-white-50">
                          Ui/Ux<span className="ml-2">/</span>
                        </a>
                        <a href="#" className="text-white-50 ml-2">
                          <i className="fa fa-user mr-2"></i>admin
                        </a>
                      </div>

                      <h3 className="mt-3 mb-5 lh-36">
                        <a href="#" className="text-white">
                          Interactivity design may connect consumer
                        </a>
                      </h3>

                      <a
                        href="blog-single.html"
                        className="btn btn-small btn-solid-border btn-round-full text-white"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="card border-0 bg-transparent">
                    <Image
                      src="/images/blog/3.jpg"
                      alt=""
                      className="img-fluid rounded"
                      layout="fill"
                    />

                    <div className="card-body mt-2">
                      <div className="blog-item-meta">
                        <a href="#" className="text-white-50">
                          Design<span className="ml-2 mr-2">/</span>
                        </a>
                        <a href="#" className="text-white-50">
                          Ui/Ux<span className="ml-2">/</span>
                        </a>
                        <a href="#" className="text-white-50 ml-2">
                          <i className="fa fa-user mr-2"></i>admin
                        </a>
                      </div>

                      <h3 className="mt-3 mb-5 lh-36">
                        <a href="#" className="text-white">
                          Marketing Strategy to bring more affect
                        </a>
                      </h3>
                      <a
                        href="blog-single.html"
                        className="btn btn-small btn-solid-border btn-round-full text-white"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-70 position-relative">
            <div className="container">
              <div className="cta-block-2 bg-gray p-5 rounded border-1">
                <div className="row justify-content-center align-items-center ">
                  <div className="col-lg-7">
                    <span className="text-color">For Every type business</span>
                    <h2 className="mt-2 mb-4 mb-lg-0">
                      Entrust Your Project to Our Best Team of Professionals
                    </h2>
                  </div>
                  <div className="col-lg-4">
                    <a
                      href="contact.html"
                      className="btn btn-main btn-round-full float-lg-right "
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </body>
    </>
  );
};

export default Home;
