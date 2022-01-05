/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="NOBLE JET DVP AND MGT LTD" />

        <meta name="author" content="Noble Jet Dvp and Mgt Ltd" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#DA70D6" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@olabiranjoshua" />
        <meta property="og:title" content="Noble Jet" />
        <meta property="og:description" content="Noble Jet Dvp and Mgt Ltd" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
          property="og:image"
          content="https://njdm.vercel.app/images/bg/home-1.jpg"
        />
        <meta
          name="twitter:image"
          content="https://njdm.vercel.app/images/bg/home-1.jpg"
        />

        <title>NobleJet - Services</title>
      </Head>

      <body>
        <Navbar />

        <div className="main-wrapper ">
          <section className="page-title bg-1">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Our services</span>
                    <h1 className="text-capitalize mb-4 text-lg">What We Do</h1>
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
                          Our services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Service />

          <section className="cta-2">
            <div className="container">
              <div className="cta-block p-5 rounded">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-7">
                    <span className="text-color">For Every type business</span>
                    <h2 className="mt-2 text-white">
                      Entrust Your Project to Our Best Team of Professionals
                    </h2>
                  </div>
                  <div className="col-lg-4">
                    <a
                      href="contact.html"
                      className="btn btn-main btn-round-full float-right"
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

export default Services;
