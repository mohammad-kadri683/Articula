import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay  } from "swiper/modules";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router';
import '../Css/Page1.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Swiper1 = () => {
 
  const slidesContent = [
    {
      title: "Articula – Your Gateway to Premium Articles",
      text: `Discover high-quality articles written by experts and 
             creators in various scientific and technical fields. 
             Join a community of readers and writers and explore 
             exclusive, knowledge-driven content.`,
      btn1: "Start Reading",
      btn2: "Create Account",
    },
    {
      title: "Explore Knowledge Like Never Before",
      text: `Dive into a world of scientific insights, tech innovations, 
             and expert opinions — all in one place.`,
     btn1: "Start Reading",
      btn2: "Create Account",
    },
    {
      title: "Connect, Learn, and Share Ideas",
      text: `Collaborate with professionals and enthusiasts, 
             expand your expertise, and contribute to a smarter world.`,
        btn1: "Start Reading",
      btn2: "Create Account",
    },
    {
      title: "Unlock Exclusive Insights",
      text: `Get premium access to verified articles, 
             research materials, and thought leadership content.`,
      btn1: "Start Reading",
      btn2: "Create Account",
    },
  ];
  

  return (
    <>
    
      <Swiper

        modules={[Pagination,Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ el: ".custom-pagination", clickable: true }}
          autoplay={{
    delay: 3000,     
    disableOnInteraction: false, 
  }}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <Container>
              <Row>
                <Col lg={5} md={12} sm={12} xs={12} data-aos="fade-right" >
                  <div className="Article">
                    <div className="text">
                      <h1>{slide.title}</h1>
                      <div className="borders mt-3"></div>
                      <p className='mt-3'>{slide.text}</p>
                    </div>
                    <div className="d-flex gap-2 mt-4">
                      <NavLink className='accountcs'>{slide.btn1}</NavLink>
                      <NavLink to='/CreateAcc' className='accountc'>{slide.btn2}</NavLink>
                    </div>
                  </div>
                </Col>
                <Col lg={7} md={12} sm={12} className='mt-5 ordares'>
                  <div className="imgrice">
                    <div className="imgs4">
                      <img src="../public/Images/images.page1/Vector (13).png" alt="rice"data-aos="zoom-out-right"data-aos-delay={800} />
                    </div>
                    <div className="line-img">
                      <img src="../public/Images/images.page1/Vector 1.png" alt="line" data-aos="zoom-out-right" data-aos-delay={800}   />
                    </div>
                    <div className="line-img more-right">
                      <img src="../public/Images/images.page1/Vector 2.png" alt="line" data-aos="zoom-out-right" data-aos-delay={800}   />
                    </div>
                    <div className="imgs">
                      <div className="imgs1">
                        <img src="../public/Images/images.page1/Rectangle 9775.png" alt="table and planet" data-aos="fade-down" data-aos-delay={200} />
                      </div>
                      <div className="imgs2">
                        <img src="../public/Images/images.page1/Rectangle 9777.png" alt="ipad and notebook" data-aos="fade-right" data-aos-delay={400}  />
                      </div>
                      <div className="imgs3">
                        <img src="../public/Images/images.page1/Rectangle 9776.png" alt="man handling phone" data-aos="fade-left"  data-aos-delay={600}  />
                      </div>
                    </div>
                  </div>
                         <div className="imgHide mt-5">
                  <img src="/Images/images.page1/Group 1000006183.png" alt="photos on article" />
                </div>
                </Col>
         
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination d-flex justify-content-center gap-2"></div>
    </>
  )
}

export default Swiper1;
