import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay  } from "swiper/modules";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from 'react-bootstrap';
import '../Css/Contact.css'
import { TfiEmail } from "react-icons/tfi";
const ContactSwiper1 = () => {
  const getIntouch=[
    {
title:"Get In touch ",
      body:"want to get in touch ? we’d love to hear from you  heres how you can reach us ."
    },
        {
title:"Get In touch ",
      body:"want to get in touch ? we’d love to hear from you  heres how you can reach us ."
    },
        {
title:"Get In touch ",
      body:"want to get in touch ? we’d love to hear from you  heres how you can reach us ."
    },
        {
title:"Get In touch ",
      body:"want to get in touch ? we’d love to hear from you  heres how you can reach us ."
    },
  ]
  return (
    <>
            <Swiper
      className='swipermobile'
              modules={[Pagination,Autoplay ]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ el: ".custom-pagination5", clickable: true }}
                autoplay={{
          delay: 3000,     
          disableOnInteraction: false, 
        }}
            >

           {getIntouch.map((slide)=>(
<SwiperSlide>
  <Row>
  <Col lg={12}>
<div className="BakimgS">
  <Container>
<div className="titleContact">
  <h1  >{slide.title}</h1>
  <p>{slide.body}</p>

</div>

  <button className='email-btn'><TfiEmail className='mb-1 me-2' /> <span>Copy Email </span></button>

  </Container>

</div>

</Col>
  </Row>

</SwiperSlide>

           ))}   






            </Swiper>
              <div className="custom-pagination5 d-flex justify-content-center gap-2"></div>
    </>
  )
}

export default ContactSwiper1
