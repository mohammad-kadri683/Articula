import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import { FaFeatherAlt } from "react-icons/fa";
import "swiper/css/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { AuthServices } from "../ApiServices/AuthServices";
import "../Css/TopritersS.css";
import { ApiConfig } from "../Api/ApiConfig";
import AOS from "aos";
import "aos/dist/aos.css";
const TopRiters = () => {

  const ArTopRiters = [
    {
      image: "/Images/ImageTopR/Rectangle 9787.png",
      auth: "Mohammad alhaj",
      title: "2021 Complete Python Bootcamp From Zero to Hero...",
      rating: "4.7",
    },
    {
      image: "/Images/ImageTopR/Rectangle 9786 (4).png",
      auth: "Sara alhaj",
      title: "2021 Complete Python Bootcamp From Zero to Hero...",
      rating: "2.7",
    },
    {
      image: "/Images/ImageTopR/Rectangle 9786 (5).png",
      auth: "Ali alhaj",
      title: "2021 Complete Python Bootcamp From Zero to Hero...",
      rating: "1.7",
    },
    {
      image: "/Images/ImageTopR/Rectangle 9787.png",
      auth: "Nour alhaj",
      title: "2021 Complete Python Bootcamp From Zero to Hero...",
      rating: "4.7",
    },
    {
      image: "/Images/ImageTopR/Rectangle 9786 (4).png",
      auth: "Leen alhaj",
      title: "2021 Complete Python Bootcamp From Zero to Hero...",
      rating: "4.7",
    },
    {
      image: "/Images/ImageTopR/Rectangle 9786 (5).png",
      auth: "Mostafa alhaj",
      title: "2021 Complete Python Bootcamp From Zero to Hero...",
      rating: "4.7",
    },
  ];

  return (
    <>
      <div className="aosss" data-aos="fade-down">
        <div className="swiperAr">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="d-flex align-items-center w-100 justify-content-between">
                  <div className="BrowsA">
                    <h2>Check out our Top Writers</h2>
                  </div>
                  <div className="Brows">
                    <a href="#" className="purble">
                      {" "}
                      <span className="me-2">
                        <FaArrowRight className="me-2" /> Browse All
                      </span>{" "}
                      We have more category & subcategory.
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Swiper
            className="mt-5 swiper2"
            modules={[Navigation]}
            navigation={true}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1.2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            centeredSlides={true}
          >
            {ArTopRiters.map((item, index) => (
              <SwiperSlide>
                <div className="cardTestam">
                  <div className="imgsitem">
                    <img src={`${item.image}`} alt="photo" />
                  </div>
                  <div
                    className="Wrtiter-NA mt-3"
                    style={{
                      backgroundColor: index % 2 == 0 ? " #E7DDB5" : "#DBCCFC",
                    }}
                  >
                    <h5 className="text-center mt-md-2">
                      <FaFeatherAlt /> {item.auth}
                    </h5>
                  </div>
                  <p className="mt-2 bodyT text-center">{item.title}</p>
                  <hr />
                  <div className="d-flex mb-2">
                    {[...Array(5)].map((_, starIndex) =>
                      starIndex < Number(item.rating) ? (
                        <FaStar key={starIndex} color="#FFD700" />
                      ) : (
                        <FaRegStar key={starIndex} color="#FFD700" />
                      )
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default TopRiters;
