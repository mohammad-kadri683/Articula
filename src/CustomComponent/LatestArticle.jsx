import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFeatherAlt } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router';
import { SignInContext } from '../Context/SignInContext';
import AOS from "aos";
import "aos/dist/aos.css";

const LatestArticle = () => {
 


  const { Userinfo } = useContext(SignInContext);

    const LaArticles=[
        {
            img:'/Images/images.page1/image.LA/Rectangle 9786.png',
            category:'Education',
            title:'2021 Complete Python Bootcamp From Zero to Hero...',
            author:'Mohammad alhaj'
        },
           {
            img:'/Images/images.page1/image.LA/Rectangle 9786 (1).png',
            category:'technology',
            title:'2021 Complete Python Bootcamp From Zero to Hero...',
            author:'Ali Ahmad'
        },
           {
            img:'/Images/images.page1/image.LA/Rectangle 9786 (2).png',
            category:'laptop',
            title:'2021 Complete Python Bootcamp From Zero to Hero...',
            author:'Mohammad Abdo'
        },
           {
              img:'/Images/images.page1/image.LA/Rectangle 9786 (3).png',
            category:'Business',
            title:'2021 Complete Python Bootcamp From Zero to Hero...',
            author:'Kareem Zaid'
        }
    ]
  return (
    <>
    
    <div className='LastA '>
        <div className="textLastA ">
            <h3>Latest Articles</h3>
        </div>
     
     <Container>

        <Row >
         {
          LaArticles.map((item,index)=>(
  <Col lg={3} md={6} className='mt-3' key={index}>
            <div className="CardLA" lg={5} md={12} sm={12} xs={12} data-aos="fade-right" data-aos-delay={index * 500} data-aos-anchor-placement="top-bottom" >
                <div className="imgLA">
<img src={item.img} alt="4 people" />

                </div>
                <div className="Science mt-2">
    <NavLink
     to={Userinfo? "/Articles":"SignIn"} className={'link link-custom'}  style={{
    backgroundColor:  index % 2 == 0 ? '#DBCCFC' 
    
    :"#FFF9E5",
    color: index %2 == 0 ? '#7E54E0':"#000000ff",
    padding: '8px',
    paddingInline: '25px',
    borderRadius: '12px',
    textDecoration: 'none',
    display: 'inline-block',
  }}>{item.category}</NavLink>
</div>
                <div className="textLA mt-2">
                    <p>{item.title}</p>
                    <hr className='lininder'></hr>
                </div>
                <div className="FeatherLa d-flex gap-2 align-items-center">
<FaFeatherAlt />
<NavLink className={'link'}>{item.author}</NavLink>
                </div>
            </div>
            
            
            </Col>

  ))  
         }
<Col lg={12}>
<div className="viewmore d-flex justify-content-end mt-4">
    <a href="#">View more </a>
</div>
</Col>          
        </Row>
        </Container> 
   
        </div>
    </>
  )
}

export default LatestArticle
