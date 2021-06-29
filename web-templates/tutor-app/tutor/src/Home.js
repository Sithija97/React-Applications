import React from "react";

function Home() {
  return (
    <>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src="assets/images/logo/white-logo.svg" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a
                          href="index.html"
                          className="active"
                          aria-label="Toggle navigation"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="about-us.html" aria-label="Toggle navigation">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="dd-menu collapsed"
                          href="javascript:void(0)"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-1"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Pages
                        </a>
                        <ul className="sub-menu collapse" id="submenu-1-1">
                          <li className="nav-item">
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li className="nav-item">
                            <a href="pricing.html">Our Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a href="signin.html">Sign In</a>
                          </li>
                          <li className="nav-item">
                            <a href="signup.html">Sign Up</a>
                          </li>
                          <li className="nav-item">
                            <a href="reset-password.html">Reset Password</a>
                          </li>
                          <li className="nav-item">
                            <a href="mail-success.html">Mail Success</a>
                          </li>
                          <li className="nav-item">
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="dd-menu collapsed"
                          href="javascript:void(0)"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-2"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Blog
                        </a>
                        <ul className="sub-menu collapse" id="submenu-1-2">
                          <li className="nav-item">
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li className="nav-item">
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="contact.html" aria-label="Toggle navigation">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="button">
                    <a href="#" className="btn">
                      Get started
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="hero-content">
                <h4 className="wow fadeInUp" data-wow-delay=".2s">
                  We Are Creative Digital Agency
                </h4>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Strategic Concepts For Businesses.
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Invest your spare change in Bitcoin and save with
                  <br /> crypto to e arn interest in real time.
                </p>
                <div className="button wow fadeInUp" data-wow-delay=".8s">
                  <a href="about-us.html" className="btn ">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="hero-image">
                <img
                  className="main-image"
                  src="assets/images/hero/hero-image.png"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3 className="wow zoomIn" data-wow-delay=".2s">
                  What we offer
                </h3>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Our Services
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-grid-alt"></i>
                </div>
                <h4 className="text-title">Brand Identity Design</h4>
                <p>
                  Invest in Bitcoin on the regular or save with one of the
                  highest interest rates on the market.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-keyword-research"></i>
                </div>
                <h4 className="text-title">Digital Marketing</h4>
                <p>
                  Invest in Bitcoin on the regular or save with one of the
                  highest interest rates on the market.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-vector"></i>
                </div>
                <h4 className="text-title">Design and Development</h4>
                <p>
                  Invest in Bitcoin on the regular or save with one of the
                  highest interest rates on the market.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-book"></i>
                </div>
                <h4 className="text-title">IT Consulting Service</h4>
                <p>
                  Invest in Bitcoin on the regular or save with one of the
                  highest interest rates on the market.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-cloud-network"></i>
                </div>
                <h4 className="text-title">Cloud Computing</h4>
                <p>
                  Invest in Bitcoin on the regular or save with one of the
                  highest interest rates on the market.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-service">
                <div className="main-icon">
                  <i className="lni lni-display-alt"></i>
                </div>
                <h4 className="text-title">Graphics Design</h4>
                <p>
                  Invest in Bitcoin on the regular or save with one of the
                  highest interest rates on the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="image wow fadeInLeft" data-wow-delay=".2s">
                <img src="assets/images/about/about-image.jpg" alt="#" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="content wow fadeInRight" data-wow-delay=".4s">
                <h4>DECENTRALISED ECONOMY</h4>
                <h2>We’ve built a platform to buy and sell shares.</h2>
                <p>
                  Spend real fights effective anything extra by leading.
                  Mouthwatering leading how real formula also locked-in have can
                  mountain thought. Jumbo plus shine sale.
                </p>
                <div className="list">
                  <div className="single-list">
                    <div className="list-icon">
                      <i className="lni lni-checkmark"></i>
                    </div>
                    <h4>Digital Marketing</h4>
                    <p>Quis autem vel eum reprehenderit</p>
                  </div>
                  <div className="single-list">
                    <div className="list-icon">
                      <i className="lni lni-checkmark"></i>
                    </div>
                    <h4>Graphics Desing</h4>
                    <p>Quis autem vel eum reprehenderit</p>
                  </div>
                  <div className="single-list">
                    <div className="list-icon">
                      <i className="lni lni-checkmark"></i>
                    </div>
                    <h4>Consulting Service</h4>
                    <p>Quis autem vel eum reprehenderit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-action">
        <div className="container">
          <div className="inner-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 col-12">
                <div className="text">
                  <h2>
                    You are using free
                    <br /> <span>Lite version of Craft.</span>
                  </h2>
                                  <p style={{ display: "block", marginTop: "10px"}}>
                    Please, purchase full version of the template to get all
                    pages, features and commercial license.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-12">
                <div className="button">
                  <a href="#" className="btn">
                    Buy Pro Version
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer section">
        <div className="footer-top">
          <div className="container">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer f-about">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/images/logo/white-logo.svg" alt="#" />
                      </a>
                    </div>
                    <p>
                      Making the world a better place through constructing
                      elegant hierarchies.
                    </p>
                    <h4 className="social-title">Follow Us On:</h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Solutions</h3>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">Marketing</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Analytics</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Commerce</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Insights</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Support</h3>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">Pricing</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Documentation</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Guides</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">API Status</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer newsletter">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates</p>
                    <form
                      action="#"
                      method="get"
                      target="_blank"
                      className="newsletter-form"
                    >
                      <input
                        name="EMAIL"
                        placeholder="Email address"
                        required="required"
                        type="email"
                      />
                      <div className="button">
                        <button className="sub-btn">
                          <i className="lni lni-envelope"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <p className="copyright-text">
                    © 2023 Craft - All Rights Reserved
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <p className="copyright-owner">
                    Designed and Developed by{" "}
                    <a
                      href="https://graygrids.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      GrayGrids
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </>
  );
}

export default Home;
