const Navbar = () => {
  return (
    <>
      {/* <!-- Header Start -->  */}

      <header className="navigation">
        <nav className="navbar navbar-expand-lg  py-4" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Mega<span>kit.</span>
            </a>

            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>

            <div
              className="collapse navbar-collapse text-center"
              id="navbarsExample09"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#">
                    About
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown03">
                    <li>
                      <a className="dropdown-item" href="about.html">
                        Our company
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="project.html">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#">
                    Blog
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown05">
                    <li>
                      <a className="dropdown-item" href="blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-sidebar.html">
                        Blog with Sidebar
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="blog-single.html">
                        Blog Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>

              <form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
                <a
                  href="contact.html"
                  className="btn btn-solid-border btn-round-full"
                >
                  Get a Quote
                </a>
              </form>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Header Close -->  */}
    </>
  );
};

export default Navbar;
