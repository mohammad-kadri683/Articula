import React from 'react'

import "../Css/Jobs.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import { TbArrowsRight } from "react-icons/tb";
import { NavLink } from "react-router";


const JobsSwiper2 = () => {
    const arrPersonalC=[
        {
            img:"Images/Image.jobs/ChartBarHorizontal.png",
            title:"Personal Career <br /> Growth",
            body:` Quisque leo leo, suscipit sed <br />
         arcu sit amet, iaculis feugiat <br />
          felis. Vestibulum non <br />
           consectetur tortor. Morbi at <br />
            orci vehicula, vehicula mi ut, <br /> 
            vestibulum odio. `
        },
               {
            img:"Images/Image.jobs/ChartBarHorizontal.png",
            title:"Personal Career <br /> Growth",
               body:` Quisque leo leo, suscipit sed <br />
         arcu sit amet, iaculis feugiat <br />
          felis. Vestibulum non <br />
           consectetur tortor. Morbi at <br />
            orci vehicula, vehicula mi ut, <br /> 
            vestibulum odio. `
        },
        

    ]
    const WellBArr=[
        {
                    img:"/Images/Image.jobs/Handshake.png",
            title:"Well-being <br/> memberships ",
            body:` Quisque leo leo, suscipit sed <br/>
             arcu sit amet, iaculis feugiat <br/>
              felis. Vestibulum non <br/>
               consectetur tortor. Morbi at <br/>
                orci vehicula, vehicula mi ut,<br/>
                 vestibulum odio. `
        },
            {
                    img:"/Images/Image.jobs/Handshake.png",
            title:"Well-being <br/> memberships ",
            body:` Quisque leo leo, suscipit sed <br/>
             arcu sit amet, iaculis feugiat <br/>
              felis. Vestibulum non <br/>
               consectetur tortor. Morbi at <br/>
                orci vehicula, vehicula mi ut,<br/>
                 vestibulum odio. `
        },

        
    ]
            const vacation=[
                {
                    img:"Images/Image.jobs/Armchair.png",
                    title:"Vacation & Paid <br/> Time Off ",
                    body:` Quisque leo leo, suscipit sed <br/>
             arcu sit amet, iaculis feugiat <br/>
              felis. Vestibulum non <br/>
               consectetur tortor. Morbi at <br/>
                orci vehicula, vehicula mi ut,<br/>
                 vestibulum odio. `

                },
                       {
                    img:"Images/Image.jobs/Armchair.png",
                    title:"Vacation & Paid <br/> Time Off",
                    body:` Quisque leo leo, suscipit sed <br/>
             arcu sit amet, iaculis feugiat <br/>
              felis. Vestibulum non <br/>
               consectetur tortor. Morbi at <br/>
                orci vehicula, vehicula mi ut,<br/>
                 vestibulum odio. `

                },
            
        ]
        const Gift=[
                {
                    img:"/Images/Image.jobs/Gift.png",
                    title:"Special Allowance & <br/> Bonuse",
                    body:` Quisque leo leo, suscipit sed <br/>
             arcu sit amet, iaculis feugiat <br/>
              felis. Vestibulum non <br/>
               consectetur tortor. Morbi at <br/>
                orci vehicula, vehicula mi ut,<br/>
                 vestibulum odio. `

                },
                       {
                    img:"/Images/Image.jobs/Gift.png",
                    title:"Special Allowance & <br/> Bonuse",
                    body:` Quisque leo leo, suscipit sed <br/>
             arcu sit amet, iaculis feugiat <br/>
              felis. Vestibulum non <br/>
               consectetur tortor. Morbi at <br/>
                orci vehicula, vehicula mi ut,<br/>
                 vestibulum odio. `

                },
            
        ]
  return (
    <>
     <Container>
        <Row>
<Col lg={3} md={6}sm={10} xs={10} className='offset-md-0 offset-lg-0 offset-1'>

 <Swiper
 className='swiper1prr'
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ el: ".custom-pagination7", clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
{
    arrPersonalC.map((slide)=>(
        <SwiperSlide className='swipeee'>

    <div className="cardSwiper1 pb-5">
<div className="imgswiperm text-center">
<img src={slide.img} alt="horiznal" />

</div>
<div className="text-center giftss">
    <strong  dangerouslySetInnerHTML={{ __html: slide.title }}/>
    <p className='mt-2' dangerouslySetInnerHTML={{ __html: slide.body }} />
             
  </div>
    </div>
    
</SwiperSlide>
    ))
}


              <div className="custom-pagination7 d-flex justify-content-center gap-2"></div>
            </Swiper>
             

  

</Col>

        
        <Col lg={3 } md={6} sm={10} xs={10} className='offset-md-0 offset-lg-0 offset-1'>
 <Swiper
 className='swiper1prr'
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ el: ".custom-pagination7", clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
{
    WellBArr.map((slide)=>(
        <SwiperSlide className='swipeee'>

    <div className="cardSwiper2 pb-5">
<div className="imgswiperm text-center">
<img src={slide.img} alt="horiznal" />

</div>
<div className="text-center giftss">
    <strong  dangerouslySetInnerHTML={{ __html: slide.title }}/>
    <p className='mt-2' dangerouslySetInnerHTML={{ __html: slide.body }} />
             
  </div>
    </div>
    
</SwiperSlide>
    ))
}


              <div className="custom-pagination7 d-flex justify-content-center gap-2"></div>
            </Swiper>

        </Col>
              <Col lg={3} md={6} sm={10} xs={10} className='offset-md-0 offset-lg-0 offset-1'>
 <Swiper
 className='swiper1prr mt-md-3 mt-lg-0 mt-3'
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ el: ".custom-pagination7", clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
{
    vacation.map((slide)=>(
        <SwiperSlide className='swipeee'>

    <div className="cardSwiper1 pb-5">
<div className="imgswiperm text-center">
<img src={slide.img} alt="horiznal" />

</div>
<div className="text-center giftss">
    <strong  dangerouslySetInnerHTML={{ __html: slide.title }}/>
    <p className='mt-2' dangerouslySetInnerHTML={{ __html: slide.body }} />
             
  </div>
    </div>
    
</SwiperSlide>
    ))
}


              <div className="custom-pagination7 d-flex justify-content-center gap-2"></div>
            </Swiper>

        </Col>
                 <Col lg={3} md={6} sm={10} xs={10} className='offset-md-0 offset-lg-0 offset-1' >
 <Swiper
 className='swiper1prr mt-md-3 mt-lg-0 mt-3'
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ el: ".custom-pagination7", clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
{
    Gift.map((slide)=>(
        <SwiperSlide className='swipeee'>

    <div className="cardSwiper2 pb-5">
<div className="imgswiperm text-center">
<img src={slide.img} alt="horiznal" />

</div>
<div className="text-center giftss">
    <strong  dangerouslySetInnerHTML={{ __html: slide.title }}/>
    <p className='mt-2' dangerouslySetInnerHTML={{ __html: slide.body }} />
             
  </div>
    </div>
    
</SwiperSlide>
    ))
}


              <div className="custom-pagination7 d-flex justify-content-center gap-2"></div>
            </Swiper>

        </Col>
        </Row>
     </Container>

    </>
  )
}

export default JobsSwiper2
