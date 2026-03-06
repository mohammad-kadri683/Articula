import React from 'react'
import Navbvar from '../Navbar/Navbvar'
import ContactSwioer1 from '../Swipers/ContactSwiper1'
import ContactSwiper1 from '../Swipers/ContactSwiper1'
import '../Css/Contact.css'
import ContactSwiper2 from '../Swipers/ContactSwiper2'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaXRay } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Footer from '../CustomComponent/Footer'
const Contact = () => {
  return (
    <>
    <header>   <Navbvar/></header>
<main>
<ContactSwiper1/>
<ContactSwiper2/>
<Container>
  <Row>
    <Col lg={5} className='mt-5'>
<div className="ContactForm mt-5">
  <div className="TitleForm">
<h2>Contact US </h2>
<p className='mt-3'> Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br /> molestie vel, ornare non id blandit netus.</p>

  </div>
  <div className="formContact">
    <form>
<div className="d-flex align-items-center gap-4">
  <input type="text" placeholder='First Name *' className='form-control' />
  <input type="text" placeholder='Last Name *' className='form-control' />

</div>
  <input type="email" placeholder='Email' className='form-control mt-3' />
  <input type="text" placeholder=' Subject *' className='form-control mt-3' />
  <select name="How did you find us?" id="HowD" className='form-select mt-3'>
      <option value="" className='d-none'>How did you find us?</option>
    <option value="from instgram">from instgram</option>
    <option value="from Facebook">from Facebook</option>
    <option value="from X">from X</option>
       <option value="from X">Another Place</option>
  </select>
    <input type="text" placeholder=' message' className='form-control py-4  mt-3' />
    <button className='mt-3 w-100 btnSe'>Send</button>



    </form>

  </div>
<div className="d-flex align-items-center justify-content-between mt-5">
<div className="d-flex">
<FaPhoneVolume style={{fontSize:"23px",color:"#B4AD8D"}} className='mt-2' />
<div className="d-flex flex-column ms-2">
<p className='mb-0 '>Phone</p>
<p className='mt-0' style={{fontSize:"10px"}}>03 5432 1234</p>

</div>

</div>
<div className="d-flex">
<FaXRay style={{fontSize:"23px" ,color:"#B4AD8D"}}  className='mt-2' />
<div className="d-flex flex-column ms-2">
<p className='mb-0 '>FAX</p>
<p className='mt-0' style={{fontSize:"10px"}}>03 5432 1234</p>

</div>

</div>
<div className="d-flex">
<MdOutlineMarkEmailUnread style={{fontSize:"23px",color:"#B4AD8D"}}  className='mt-2' />
<div className="d-flex flex-column ms-2">
<p className='mb-0 '>EMAIL</p>
<p className='mt-0' style={{fontSize:"10px"}}>info@marcc.com.au</p>

</div>


</div>  


</div>
</div>


    </Col>
    <Col lg={6} className='mt-lg-5 offset-lg-1'>
    <a href="#">
      <img className='mt-5' src="Images/Image.Contact/Component 6.png" alt="map" />
    </a>
    </Col>
  </Row>
</Container>
</main>
<footer className='mt-5'>
<Footer/>
</footer>


    </>
  )
}

export default Contact
