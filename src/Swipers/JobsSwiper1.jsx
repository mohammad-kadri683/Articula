import React from "react";
import "../Css/Jobs.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import { TbArrowsRight } from "react-icons/tb";
import { NavLink } from "react-router";
const JobsSwiper1 = () => {
  const slideMIncredible = [
    {
      title: "Join the most incredible <br/> & creative team.",
      body: "Proin gravida enim augue, dapibus ultrices eros feugiat et.<br/> Pellentesque bibendum orci felis, sit amet efficitur felis lacinia <br/> ac. Mauris gravida justo ac nunc consectetur.",
    },
    {
      title: "Join the most incredible <br/> & creative team.",
      body: "Proin gravida enim augue, dapibus ultrices eros feugiat et.<br/> Pellentesque bibendum orci felis, sit amet efficitur felis lacinia <br/> ac. Mauris gravida justo ac nunc consectetur.",
    },
    {
      title: "Join the most incredible <br/> & creative team.",
      body: "Proin gravida enim augue, dapibus ultrices eros feugiat et.<br/> Pellentesque bibendum orci felis, sit amet efficitur felis lacinia <br/> ac. Mauris gravida justo ac nunc consectetur.",
    },
    {
      title: "Join the most incredible <br/> & creative team.",
      body: "Proin gravida enim augue, dapibus ultrices eros feugiat et.<br/> Pellentesque bibendum orci felis, sit amet efficitur felis lacinia <br/> ac. Mauris gravida justo ac nunc consectetur.",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ el: ".custom-pagination6", clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slideMIncredible.map((slide) => (
          <SwiperSlide>
            <Container>
              <Row className="mt-5">
                <Col lg={6} md={12} sm={12} xs={12} className="mt-5" data-aos="fade-right" data-aos-delay={300}>
                  <div className="textInvred">
                    <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
                    <p
                      className="mt-3"
                   
                      dangerouslySetInnerHTML={{ __html: slide.body }}
                    />
                    <button className="ViePos">
                      View Open Positions{" "}
                      <span className="ms-4">
                        <TbArrowsRight />
                      </span>
                    </button>
                  </div>
                </Col>
                <Col lg={5} md={8} sm={12} xs={12} className="offset-lg-1 imgwon " data-aos="fade-left" data-aos-delay={300}>
                <div className="imgbigger">
    <img
                    src="Images/Image.jobs/Group 1000006213.png"
                    alt="women"
                  />
                </div>
              
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
            <div className="custom-pagination6 d-flex justify-content-center gap-2"></div>
    </>
  );
};

export default JobsSwiper1;
