import React from 'react'
import Navbvar from '../Navbar/Navbvar'

import Swiper1 from '../Swipers/Swiper1';
import Categories from '../CustomComponent/Categories';
import LatestArticle from '../CustomComponent/LatestArticle';
import TopRiters from '../Swipers/TopRiters';
import OJOpprtunities from '../Swipers/OJOpprtunities';
import { Container, Row,Col } from 'react-bootstrap';
import SocialMedia from '../Swipers/SocialMedia';
import Footer from '../CustomComponent/Footer';
const HomePage = () => {
  return (
    <>
    <header>
     <Navbvar/>
    </header>
   <main>
     <Swiper1/>
    <Categories/>
    <LatestArticle/>
    <TopRiters/>

  <OJOpprtunities/>
  <Container>
    <Row>
      <Col lg={12} className='mt-4'>
      <div className="d-flex justify-content-center w-100 mt-3 mb-3 partners">
<h2>Our <span> Partners</span></h2>

      </div>
      </Col>
    </Row>
  </Container>
    

<SocialMedia/>
   </main>
   <footer>
    <Footer/>
   </footer>

    
    </>
      
   
  )
}

export default HomePage
