import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* <!-- Header Start -->  */}

      <header className="navigation">
        <nav className="navbar navbar-expand-lg  py-4" id="navbar">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                Noble<span>Jet</span>
              </a>
            </Link>

            <button
              className={`navbar-toggler  ${!toggle ? "collapsed" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span className="fa fa-bars"></span>
            </button>

            <div
              className={`collapse navbar-collapse text-center  ${
                toggle ? "show" : ""
              }`}
              id="navbarsExample09"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
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
              </ul>

              <form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
                <Link href="/contact">
                  <a className="btn btn-solid-border btn-round-full">Contact</a>
                </Link>
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
