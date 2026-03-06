import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Footer.css'
import NavbarLogo from '../Navbar/NavbarLogo';
const Footer = () => {
  return (
    <>
      <div className="footer ">
<Container>
    <Row className='pt-5 pb-5'>
        <Col lg={3} className='offset-lg-1'>
<div className="d-flex flex-column gap-2 mt-4">
    <NavbarLogo/>   
    <p style={{color:"#8C94A3"}}>Aliquam rhoncus ligula est, non pulvinar <br /> elit 
convallis nec. Donec odio at.</p>
<div className="d-flex gap-3 align-items-center">
<a href="#"><div className="imgsocial"><img src="/Images/images.page1/image.footer/Social (3).png" alt="facebook" /></div></a>
<a href="#"><div className="imgsocial"><img src="/Images/images.page1/image.footer/Social (4).png" alt="instgram" /></div></a>
<a href="#"><div className="imgsocial"><img src="/Images/images.page1/image.footer/Social (3).png" alt="facebook" /></div></a>
<a href="#"><div className="imgsocial"><img src="/Images/images.page1/image.footer/Social (6).png" alt="twitte" /></div></a>
<a href="#"><div className="imgsocial"><img src="/Images/images.page1/image.footer/Social (7).png" alt="yotube" /></div></a>

</div>
</div>

        </Col>
        <Col lg={2}>
        <div className="d-flex flex-column gap-2 mt-4 ">

          <strong className='mb-2' style={{color:"#fff",}}>Top 4 Category</strong>
          <a href="#" style={{color:"#8C94A3" , textDecoration:"none"}}>Development</a>
                 <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Finance </a>
                        <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Design</a>
                               <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Business</a>
        </div>
        </Col>
             <Col lg={2}>
        <div className="d-flex flex-column gap-2 mt-4 ">

          <strong className='mb-2' style={{color:"#fff",}}>Quick Links</strong>
          <a href="#" style={{color:"#8C94A3" , textDecoration:"none"}}>About</a>
                 <a href="#"  className='underr' style={{color:"#ffffffff", }}>Become an author  </a>
                        <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Contact</a>
                               <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Career</a>
        </div>
        </Col>
         <Col lg={2}>
        <div className="d-flex flex-column gap-2 mt-4 ">

          <strong className='mb-2' style={{color:"#fff",}}>Support</strong>
          <a href="#" style={{color:"#8C94A3" , textDecoration:"none"}}>Help Center</a>
                 <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>FAQs </a>
                        <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Terms & Condition</a>
                               <a href="#" style={{color:"#8C94A3", textDecoration:"none"}}>Privacy Policy</a>
        </div>
        </Col>
              <Col lg={2}>
        <div className="d-flex flex-column gap-2 mt-4 ">

          <strong className='mb-2' style={{color:"#fff",}}>Downlaod our app</strong>
      <a href="#"> <img src="/Images/images.page1/image.footer/Download our app.png" alt="Appstore" /></a>
            <a href="#"> <img src="/Images/images.page1/image.footer/Download our app (1).png" alt="Appstore" /></a>
        </div>
        </Col>
    
    </Row>
</Container>
<div className="allrigt mt-3 p-3">
  <div className="d-flex w-100 justify-content-center">
    <strong>© 2025 - All rights reserved</strong>
  </div>
</div>
      </div>
    </>
  )
}

export default Footer
