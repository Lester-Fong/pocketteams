import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import background from '../assets_pocketdevs/assets/img/bg/common-bg.svg';

const Navigation = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [loggedIn, setLoggedIn] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    if (userInfo) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [userInfo]);

  return (
    <>
      <section className="header navbar-area sticky" style={{background: `url(${background})`}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="banner-content">
                        <h3 class="text-white mb-2 d-none d-md-block">PocketTeams</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a className="navbar-brand" href="/">
                  <Image src={pocketdevsLogo}></Image>
                  <Navbar.Brand>Pocket Teams</Navbar.Brand>
                </a> */}
                <button className={isActive ? "navbar-toggler active" : "navbar-toggler collapsed"} onClick={toggleNavbar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div className={isActive ? "collapse navbar-collapse sub-menu-bar show" : "collapse navbar-collapse sub-menu-bar"} id="navbarSupportedContent">
                  {!loggedIn &&
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                          {isActive ? <a className="page-scroll" href="#features">Features</a>:
                            <a className="page-scroll nav-text" href="#features">Features</a>
                          }
                      </li>
                      <li className="nav-item">
                          {isActive ? <a className="page-scroll" href="https://pocketdevs.online/#contact">Contact</a>:
                            <a className="page-scroll nav-text" href="https://pocketdevs.online/#contact">Contact</a>
                          }
                      </li>
                      <li className="nav-item">
                        {isActive ? <a className="page-scroll" href="/login">Login</a> :
                          <a href="/login" className="page-scroll nav-text">Login</a>}
                      </li>
                      <li className="nav-item">
                        {isActive ? <a className="page-scroll" href="/register">Register</a> :
                          <a href="/register" className="page-scroll nav-text">Register</a>}
                      </li>
                    </ul>
                  }
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navigation