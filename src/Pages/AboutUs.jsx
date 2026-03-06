import React from "react";
import Navbvar from "../Navbar/Navbvar";
import "../Css/AboutUs.css";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SocialMedia from "../Swipers/SocialMedia";
import { LuNotebookText } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Footer from "../CustomComponent/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  const SlideAboutUS = [
    {
      history: "2011-2025",
      title: "We share knowledge with the world",
      body: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.  ",
    },
    {
      history: "2016 - 2020",
      title: "Shaping the Future of Knowledge",
      body: "Today, we empower professionals, learners, and creators with advanced publishing features, verified content, and a collaborative environment that encourages growth and creativity. ",
    },
    {
      history: "2021 - 2025",
      title: "We share knowledge with the world",
      body: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.  ",
    },
    {
      history: "2011-2025",
      title: "We share knowledge with the world",
      body: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.  ",
    },
  ];
  const topriters = [
    {
      body: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
      name: "Ted Sarandos",
      job: "Chief Executive Officer of Netflix",
    },
    {
      body: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
      name: "Mohamad Ka",
      job: "Software Engineering In Spu",
    },
    {
      body: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
      name: "Zaid Ahmad",
      job: "Seo In Company Syria ",
    },
    {
      body: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
      name: "ALi Boga",
      job: "Human Resources IN Spu",
    },
  ];
  return (
    <>
      <header>
        <Navbvar />
      </header>
      <main>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ el: ".custom-pagination4", clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {SlideAboutUS.map((slide, index) => (
            <SwiperSlide>
              <Container>
                <Row>
                  <Col lg={5} md={12} sm={12} className="titlecc" data-aos="fade-right" data-aos-delay={200}>
                    <div className="history">
                      <strong style={{  color: "#E9EAF0" }}>
                        {slide.history}
                      </strong>
                      <div className="shareKnowldg mt-3">
                        <h1>{slide.title}</h1>
                      </div>
                      <div className="borders mt-3"></div>
                      <div className="textBody mt-4">
                        <p >{slide.body}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={7}  sm={12} md={12} className="imgCC" data-aos="fade-left" data-aos-delay={200}>
                    <div className="imgAu">
                      <img
                        src="Images/Image.AboutUs/Frame 1597883239.png"
                        alt="man and women"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination4 d-flex justify-content-center gap-2"></div>
      </main>
      <SocialMedia />
      <div className="AlmostY">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12} xs={12} className="">
            <div className="imagesWrapper">

            
              <div className="cardY15 ">
                <strong>
                  We’ve been here <br /> almost 15 years
                </strong>
                <a href="#" className="mt-3 OurT w-100 ms-2">
                  {" "}
                  Join Our Team
                </a>
              </div>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className="img1 w-100">
                    {" "}
                    <img
                      src="Images/Image.AboutUs/Rectangle 34624704.png"
                      alt="office"
                      className="float-img float-1 "
                    />
                  </div>
                </Col>
                <Col lg={5} md={5} sm={5} xs={5}>
                  {" "}
                  <div className="img2 w-100">
                    <img
                      src="Images/Image.AboutUs/Rectangle 34624702.png"
                      alt="women and man"
                      className="float-img float-2"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  {" "}
                  <div className="img3 w-100">
                    <img
                      src="/Images/Image.AboutUs/Rectangle 34624703.png"
                      alt="people"
                      className="float-img float-3"
                    />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={5} xs={5}>
                  <div className="img3 mt-4 w-100">
                    <img
                      src="/Images/Image.AboutUs/Rectangle 34624705.png"
                      alt="people"
                      className="float-img float-4"
                    />
                  </div>
                </Col>
              </Row>
              </div>
            </Col>
            <Col lg={5} md={12} sm={12} xs={12} className="offset-lg-1">
              <div>
                <div className="textH15 d-flex justify-content-center flex-column ">
                  <h1>
                    We’ve been here <br /> almost 15 years
                  </h1>
                </div>
                <div className="p-text d-flex ">
                  <p className="p-size">
                    Fusce lobortis leo augue, sit amet tristique nisi commodo{" "}
                    <br /> in. Aliquam ac libero quis tellus venenatis
                    imperdiet. Sed <br /> sed nunc libero. Curabitur in urna
                    ligula. torquent per <br /> conubia nostra.
                  </p>
                </div>
                <div className="d-flex ms-lg-5  justify-content-between">
                  <div className="d-flex">
                    <LuNotebookText
                      className="mt-3 iconre"
                      style={{ color: "#564FFD",}}
                    />
                    <div className="credifted d-flex flex-column">
                      <strong className="kNumb ms-4">26k</strong>
                      <p className="ms-4 ppesent" >
                        Certified Instructor
                      </p>
                    </div>
                  </div>
                  <div className="d-flex  ">
                    <FaCheckCircle
                      className="mt-3 iconre"
                      style={{ color: "#23BD33",  }}
                    />
                    <div className="credifted d-flex flex-column">
                      <strong className="kNumb ms-4">99.9%</strong>
                      <p className="ms-4 ppesent" >
                        Success Rate
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <GoStack 
                      className="mt-3 iconre"
                      style={{ color: "#FD8E1F",  }}
                    />
                    <div className="credifted d-flex flex-column">
                      <strong className="kNumb ms-4">57</strong>
                      <p className="ms-4 ppesent">
                        Trusted Companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="LastA pb-5">
        <div className="textLastA ">
          <h3>Top Testimonials</h3>
        </div>
  <Container>
        <Swiper spaceBetween={50} slidesPerView={2.8}
                    breakpoints={{
  768: {
    slidesPerView: 2
  },
     0: {
      slidesPerView: 1 
    },
     992: {
    slidesPerView: 3
  },
  }}
        >
          {topriters.map((slide, index) => (
            <SwiperSlide>
            
                <div className="CardTest">
                  <RiDoubleQuotesL className="doubleq mt-4 ms-2" />
                  <strong className="d-block text-center mt-3">
                    {slide.body}
                  </strong>
                  <div className="w-100 d-flex justify-content-end ">
                    {" "}
                    <RiDoubleQuotesR className="doubleq mt-3 me-2" />
                  </div>
                  <div className="nameR w-100 mt-5">
                    <p
                      className="text-center mt-1 pt-2 mb-2"
                      style={{ color: "white" }}
                    >
                      {slide.name}
                    </p>
                    <p
                      className="text-center pb-2"
                      style={{ color: "white", fontSize: "13px" }}
                    >
                      {slide.job}
                    </p>
                  </div>
                </div>
          
            </SwiperSlide>
          ))}
        </Swiper>
            </Container>
      </div>
      <footer>
        <div className="fot">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
