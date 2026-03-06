import React from 'react'
import Navbvar from '../Navbar/Navbvar'
import '../Css/Error404.css'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router'
const Error404 = () => {
  return (
    <>
      <Navbvar/>
      <div className="oops">
<Container>

    <Row>
        <Col lg={12}>
<div className='text-center ims404'>
<img src="/Images/Image.404/4660877_2446910 1.png" alt="There Was An Error  404" />

</div>
<div className="text-center mt-3"><NavLink className="errnavlink" to={'/'}>Go Back</NavLink></div>
        </Col>
    </Row>
</Container>
      </div>
    </>
  )
}

export default Error404
