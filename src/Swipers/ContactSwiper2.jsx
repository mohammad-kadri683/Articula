import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Col, Container, Row } from "react-bootstrap";
import "../Css/Contact.css";
import { FaArrowRight } from "react-icons/fa";

const ContactSwiper2 = () => {
  const Branches = [
    {
      image: "Images/Image.Contact/Rectangle 9803.png",
      place: "Dubai. UAE",
      title: "Lorem Ipsum dollerDuis <br/> aute irure, No. 6548",
    },
    {
      image: "Images/Image.Contact/Rectangle 9803 (1).png",
      place: "Istanbul, Turkey",
      title: "Lorem Ipsum dollerDuis <br/> aute irure, No. 6548",
    },
    {
      image: "Images/Image.Contact/Rectangle 9803 (2).png",
      place: "Damascus, Syria",
      title: "Lorem Ipsum dollerDuis <br/> aute irure, No. 6548",
    },
    {
      image: "Images/Image.Contact/Rectangle 9803.png",
      place: "Dubai. UAE",
      title: "Lorem Ipsum dollerDuis <br/> aute irure, No. 6548",
    },
    {
      image: "Images/Image.Contact/Rectangle 9803 (1).png",
      place: "Istanbul, Turkey",
      title: "Lorem Ipsum dollerDuis <br/> aute irure, No. 6548",
    },
  ];
  return (
    <>
      <Container>
        <Row className="mt-5 ">
          <Col lg={12}>
            <div className="d-flex align-items-center browsfa w-100 justify-content-between mt-4 ">
              <div className="Brows">
                <a href="#" className="purble">
                  {" "}
                  <span className="me-2">
                    <FaArrowRight className="me-2" /> Browse All
                  </span>{" "}
                  We have more Branches to check out.
                </a>
              </div>
              <div className="BrowsA">
                <h2>Browse Our Branches</h2>
              </div>
            </div>
          </Col>
        </Row>

        <Swiper
     
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {Branches.map((slide) => (
            <SwiperSlide>
              <div className="imgdubai mt-5">
                <img src={slide.image} alt={slide.place} />
                <div className="place">
                  <p>{slide.place}</p>
                </div>
                <div className="textDubi  w-100">
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default ContactSwiper2;
