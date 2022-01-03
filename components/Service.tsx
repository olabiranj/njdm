/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Service = () => {
  return (
    <>
      {/* <!--  Section Services Start --> */}
      <section className="section service border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Our Services</span>
                <h2 className="mt-3 content-title ">
                  We provide a wide range of creative services{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-headphone-alt"></i>
                <h4 className="mb-3">Keynote speaking</h4>
                <p>
                  A digital agency isn't here to replace your internal team,
                  we're here to partner
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-layers"></i>
                <h4 className="mb-3">Business consultant</h4>
                <p>
                  A digital agency isn't here to replace your internal team,
                  we're here to partner
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <i className="ti-bar-chart"></i>
                <h4 className="mb-3">Life coach</h4>
                <p>
                  A digital agency isn't here to replace your internal team,
                  we're here to partner
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="ti-vector"></i>
                <h4 className="mb-3">Branding Expert</h4>
                <p>
                  A digital agency isn't here to replace your internal team,
                  we're here to partner
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="ti-medall-alt"></i>
                <h4 className="mb-3">Career Expert</h4>
                <p>
                  A digital agency isn't here to replace your internal team,
                  we're here to partner
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <i className="ti-pencil-alt"></i>
                <h4 className="mb-3">Content creation.</h4>
                <p>
                  A digital agency isn't here to replace your internal team,
                  we're here to partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  Section Services End --> */}
    </>
  );
};

export default Service;
