import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "./NavbarLogo";
import { TbWorld } from "react-icons/tb";
import "../Css/Navbar.css";
import { Navigate, NavLink } from "react-router";
import { SignInContext } from "../Context/SignInContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const Navbvar = ({ empty = false, mode = "main" }) => {
  const { localUserImage } = useContext(SignInContext);
  const { Userinfo, setUserinfo, Insilaized } = useContext(SignInContext);
  const uid = Userinfo?.UserData?.current_user?.uid;

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    React.useEffect(() => {
      Fancybox.bind("[data-fancybox='profile']", {});

      return () => {
        Fancybox.destroy();
      };
    }, []),
    (
      <Navbar expand="lg" fixed="top" className="bg-N w-100">
        <Container>
        <div className="d-lg-none navlogoo">
            <NavbarLogo />
        </div>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
            className="d-lg-none ms-auto "
            style={{ backgroundColor: "white" }}
          />

          {/* الشاشات الصغيرة */}
       
          <Offcanvas
            id="offcanvasNavbar"
            placement="end"
            show={show}
            onHide={handleClose}
            className="d-lg-none offcanvss"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                <Navbar.Brand as={NavLink} to="/">
                  <NavbarLogo />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              {Userinfo? (
                <Nav className="flex-column gap-3">
                <div className="d-flex">
                          <div className="imgprofile">
                        <a
                          data-fancybox="profile"
                          href={
                            localUserImage
                              ? `https://tamkeen-dev.com${localStorage.getItem(
                                  `user_picture_${uid}`
                                )}`
                              : "/Images/imageNav/user.png"
                          }
                        >
                          <img
                            src={
                              localUserImage
                                ? `https://tamkeen-dev.com${localStorage.getItem(
                                    `user_picture_${uid}`
                                  )}`
                                : "/Images/imageNav/user.png"
                            }
                            alt="profile"
                            style={{
                              width: "45px",
                              height: "45px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                          />
                        </a>
                      </div>
                    <Dropdown>
                    <Dropdown.Toggle
                      className="dropdownn dropdown-toggle-custom mt-1 "
                      id="dropdown-basic"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "none",
                        fontSize: "18px",
                      }}
                    >
                      {Userinfo?.UserData?.current_user?.name}
                    </Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item as={NavLink} to="/MyArticle">
    My Article
  </Dropdown.Item>

  <Dropdown.Item as={NavLink} to="/MyProfile">
    My Account
  </Dropdown.Item>

  {Userinfo?.UserData?.current_user?.name?.includes("tamkeen") && (
    <Dropdown.Item as={NavLink} to="/Dashb">
      Dashboard
    </Dropdown.Item>
  )}
           <Dropdown.Item
                            onClick={() => {
                              localStorage.removeItem("UserData");
                              setUserinfo(null);
                              {
                                navigate("/");
                              }
                            }}
                          >
                            logout{" "}
                          </Dropdown.Item>
</Dropdown.Menu>


                  </Dropdown>
            
                </div>

                  <NavLink
                    to="/"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={Userinfo ? "/Articles" : "/SignIn"}
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Articles
                  </NavLink>
                  <NavLink
                    to="/Jobs"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/FaQ"
                    className="class-weight"
                    
                  >
                    FaQ
                  </NavLink>
                  <NavLink
                    to="/About Us"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Contact
                  </NavLink>
                </Nav>
              ):(
                    <Nav className="flex-column gap-3">
              

                  <NavLink
                    to="/"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={Userinfo ? "/Articles" : "/SignIn"}
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Articles
                  </NavLink>
                  <NavLink
                    to="/Jobs"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/FaQ"
                    className="class-weight"
                    
                  >
                    FaQ
                  </NavLink>
                  <NavLink
                    to="/About Us"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    className="class-weight"
                    onClick={handleClose}
                  >
                    Contact
                  </NavLink>
                </Nav>
              )
            
            }

              <hr />

              {!Insilaized && (
                <>
                  {Userinfo ? (
                    <button
                      className="btn btn-outline-danger mt-3"
                      onClick={() => {
                        const confirmLogout = window.confirm(
                          "Are you sure you want to Log Out?"
                        );
                        if (confirmLogout) {
                          localStorage.removeItem("UserData");
                          setUserinfo(null);
                        }
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <div className="d-flex  flex-column gap-3 mt-3 offc-btns">
                      {mode === "main" && (
                        <>
                          <NavLink
                            to="/SignIn"
                            className="SignIn inline"
                            onClick={handleClose}
                          >
                            Sign In
                          </NavLink>
                          <NavLink
                            to="/CreateAcc"
                            className="CreateAcc"
                            onClick={handleClose}
                          >
                            Create Account
                          </NavLink>
                        </>
                      )}
                      {mode === "signin" && (
                        <NavLink
                          to="/CreateAcc"
                          className={"CreateAcc"}
                          onClick={handleClose}
                        >
                          Create Account
                        </NavLink>
                      )}
                      {mode === "register" && (
                        <NavLink
                          to="/SignIn"
                          className={"SignIn"}
                          onClick={handleClose}
                        >
                          Sign In
                        </NavLink>
                      )}
                    </div>
                  )}
                </>
              )}
            </Offcanvas.Body>
          </Offcanvas>

          {/*  الشاشات الكبيرة */}
          <Nav className="me-auto d-none d-lg-flex align-items-center">
            <Navbar.Brand as={NavLink} to="/">
              <NavbarLogo />
            </Navbar.Brand>

            {!empty && (
              <div className="d-flex gap-5 ms-3 navooo">
                <NavLink to="/" className="class-weight">
                  Home
                </NavLink>
                <NavLink
                  to={Userinfo ? "/Articles" : "/SignIn"}
                  className="class-weight"
                >
                  Articles
                </NavLink>
                <NavLink to="/Jobs" className="class-weight">
                  Jobs
                </NavLink>
                <NavLink to="/FaQ" className="class-weight">
                  FaQ
                </NavLink>
                <NavLink to="/About Us" className="class-weight">
                  About Us
                </NavLink>
                <NavLink to="/Contact" className="class-weight">
                  Contact
                </NavLink>
              </div>
            )}
          </Nav>

          {}
          <Nav className="d-none d-lg-flex align-items-center gap-lg-4 arbicc">
            {!empty && (
              <Nav className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center lang-select">
                  <select name="lang" id="select" className="bg-none">
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                  <TbWorld className="world-icon mt-1" />
                </div>
              </Nav>
            )}

            {!Insilaized && (
              <>
                {Userinfo ? (
                  <>
                    <div className="d-flex gap-2">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="dropdownn dropdown-toggle-custom mt-1 "
                          id="dropdown-basic"
                          style={{
                            backgroundColor: "transparent",
                            color: "#fff",
                            border: "none",
                            fontSize: "18px",
                          }}
                        >
                          {Userinfo?.UserData?.current_user?.name}
                        </Dropdown.Toggle>

              <Dropdown.Menu>
  <Dropdown.Item as={NavLink} to="/MyArticle">
    My Article
  </Dropdown.Item>

  <Dropdown.Item as={NavLink} to="/MyProfile">
    My Account
  </Dropdown.Item>

  {Userinfo?.UserData?.current_user?.name?.includes("tamkeen") && (
    <Dropdown.Item as={NavLink} to="/Dashb">
      Dashboard
    </Dropdown.Item>
  )}
           <Dropdown.Item
                            onClick={() => {
                              localStorage.removeItem("UserData");
                              setUserinfo(null);
                              {
                                navigate("/");
                              }
                            }}
                          >
                            logout{" "}
                          </Dropdown.Item>
</Dropdown.Menu>
                      </Dropdown>
                      <div className="imgprofile">
                        <a
                          data-fancybox="profile"
                          href={
                            localUserImage
                              ? `https://tamkeen-dev.com${localStorage.getItem(
                                  `user_picture_${uid}`
                                )}`
                              : "/Images/imageNav/user.png"
                          }
                        >
                          <img
                            src={
                              localUserImage
                                ? `https://tamkeen-dev.com${localStorage.getItem(
                                    `user_picture_${uid}`
                                  )}`
                                : "/Images/imageNav/user.png"
                            }
                            alt="profile"
                            style={{
                              width: "45px",
                              height: "45px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {mode === "main" && (
                      <>
                        <NavLink to="/SignIn" className="SignIn">
                          Sign In
                        </NavLink>
                        <NavLink to="/CreateAcc" className="CreateAcc">
                          Create Account
                        </NavLink>
                      </>
                    )}
                    {mode === "signin" && (
                      <NavLink to="/CreateAcc" className="CreateAcc">
                        Create Account
                      </NavLink>
                    )}
                    {mode === "register" && (
                      <NavLink to="/SignIn" className="SignIn">
                        Sign In
                      </NavLink>
                    )}
                  </>
                )}
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    )
  );
};

export default Navbvar;
