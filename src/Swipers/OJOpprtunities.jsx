import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "../Css/Page1.css";
import { GiNetworkBars } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { CiViewTimeline } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
const OJOpprtunities = () => {
   useEffect(() => {
      AOS.init({ duration: 600, once: true,delay:200 }); 
      AOS.refresh();
    }, []);
  return (
    <>
      <div className="mt-5" style={{ backgroundColor: "#F3EFFE" }}>
        <div className="textjop d-flex justify-content-end ">
          <h3>Our Job Opprtunities</h3>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ el: ".custom-pagination2", clickable: true }}
        >
          <SwiperSlide>
            <Container>
              <Row>
                {[...Array(4)].map((_, index) => (
                  <Col lg={6}  className="mt-3">
                    <div className="CardJop ">
                      <div className="d-flex imgflex gap-2">
                        <div className="imgJpob">
                          <img
                            src={
                              index === 0
                                ? "/Images/images.page1/Course Images.png"
                                : index === 1
                                ? "/Images/images.page1/Course Images (2).png"
                                : index === 2
                                ? "/Images/images.page1/Course Images (1).png"
                                : "/Images/images.page1/Course Images.png"
                            }
                            alt="Course img"
                          />
                        </div>
                        <div className="d-flex flex-column gap-2 w-100">
                          <div className="d-flex justify-content-between oool mt-1 w-100">
                            <p className="FeaturedC ">Featured</p>
                            <p className="me-2">$300 / Month</p>
                          </div>

                          <h5 className="hfive">System Analysis</h5>
                          <p className="twoY" style={{ color: "#4E5566" }}>
                            2 Years of experience
                          </p>
                          <hr className="mt-1" />
                          <div className="d-flex timing align-items-center justify-content-between ">
                            <p>
                              {" "}
                              <CiViewTimeline /> Part Time
                            </p>
                            <p>
                              Sinor{" "}
                              <GiNetworkBars
                                className="mb-1"
                                style={{ color: "#E34444" }}
                              />
                            </p>
                            <p className="me-2">
                              {" "}
                              <CiClock2 style={{ color: "#23BD33" }} /> Full
                              Time
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <Row>
                {[...Array(4)].map((_, index) => (
                  <Col lg={6} className="mt-3">
                    <div className="CardJop ">
                      <div className="d-flex gap-2">
                        <div className="imgJpob">
                          <img
                            src={
                              index === 0
                                ? "/Images/images.page1/Course Images.png"
                                : index === 1
                                ? "/Images/images.page1/Course Images (2).png"
                                : index === 2
                                ? "/Images/images.page1/Course Images (1).png"
                                : "/Images/images.page1/Course Images.png"
                            }
                            alt="Course img"
                          />
                        </div>
                        <div className="d-flex flex-column gap-2 w-100">
                          <div className="d-flex justify-content-between oool mt-1 w-100">
                            <p className="FeaturedC ">Featured</p>
                            <p className="me-2">$300 / Month</p>
                          </div>

                          <h5 className="hfive">System Analysis</h5>
                          <p className="twoY" style={{ color: "#4E5566" }}>
                            2 Years of experience
                          </p>
                          <hr className="mt-1" />
                          <div className="d-flex timing align-items-center justify-content-between ">
                            <p>
                              {" "}
                              <CiViewTimeline /> Part Time
                            </p>
                            <p>
                              Sinor{" "}
                              <GiNetworkBars
                                className="mb-1"
                                style={{ color: "#E34444" }}
                              />
                            </p>
                            <p className="me-2">
                              {" "}
                              <CiClock2 style={{ color: "#23BD33" }} /> Full
                              Time
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </SwiperSlide>
        </Swiper>
    
        <div className="custom-pagination2 pb-2 d-flex justify-content-center gap-2"></div>
      </div>
      <div className="bigo">
   <Container>
            <Row>
                <Col lg={12}>
                <div className=" viemore2 d-flex justify-content-start">
                    <a href="#">View more </a>
                </div>
                </Col>          
            </Row>
        </Container>
      </div>
       
    </>
  );
};

export default OJOpprtunities;
