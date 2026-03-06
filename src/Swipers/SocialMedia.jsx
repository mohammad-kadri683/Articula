import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "../Css/Page1.css";
const SocialMedia = () => {
  return (
    <>
          <div className="mt-5 pt-4 pb-2" style={{ backgroundColor: "#F3EFFE" }}>
            <Swiper
            className='social-swiper'
          modules={[]}
          spaceBetween={50}
          slidesPerView={5.5}
            breakpoints={{
  768: {
    slidesPerView: 3.5
  },
     0: {
      slidesPerView: 2.5 
    },
     992: {
    slidesPerView: 5.5
  },
  }}
        
        >
            {[...Array(6)].map((_,index)=>(
<SwiperSlide>

    <Container>
      
            
            <div className="img-S w-100">

                <img src={
                    index==0? "/Images/images.page1/image.social/LOGO (7).png" :
                      index==1 ? "/Images/images.page1/image.social/LOGO (8).png" :
                      index==2 ?"/Images/images.page1/image.social/LOGO (9).png":
                          index==3 ?"/Images/images.page1/image.social/LOGO (10).png":
                              index==4 ?"/Images/images.page1/image.social/LOGO (11).png":
                                  index==5 ?"/Images/images.page1/image.social/LOGO (7).png":
                                       "/Images/images.page1/image.social/LOGO (8).png"


                   }
                   alt="Am.com"
                    />
            </div>
           
      
    </Container>
</SwiperSlide>
            ))}





        </Swiper>
        </div>
    </>
  )
}

export default SocialMedia
