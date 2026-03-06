import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbvar from "../Navbar/Navbvar";
import { AuthServices } from "../ApiServices/AuthServices";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from 'react-bootstrap/Accordion';
import "../Css/Faq.css";
import Footer from '../CustomComponent/Footer'
import { IoIosArrowDown } from "react-icons/io";
import Spinner from "react-bootstrap/Spinner";
const FAQ = () => {
    const [loading, setLoading] = useState(true);
  const [FaqData, SetFaqData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  const truncateHtmlByWords =
   (html, wordLimit = 40) => {
  if (!html) return "";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const text = tempDiv.textContent || tempDiv.innerText || "";
  const words = text.split(/\s+/).slice(0, wordLimit).join(" ");

  return words + (text.split(/\s+/).length > wordLimit ? "..." : "");
};
  const FaqList = (catId) => {
    AuthServices.FaqList(catId)
      .then((data) => {
        console.log(data);
        SetFaqData(data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Faq List Ended");
      });
  };
  useEffect(() => {
    if (activeCat) {
      FaqList(activeCat);
    }
  }, [activeCat]);
  const CategoryFaq = () => {
    
    AuthServices.FaqCategory()
      .then((data) => {
        setCategories(data);
        setActiveCat(data[0].id);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("category ended fetch");
      });
  };
  useEffect(() => {
    CategoryFaq();
  }, []);
  const handleTabSelect = (catId) => {
    setActiveCat(catId);
    FaqList(catId); 
  };
  
  return (
    
    <>
      <header>
        <Navbvar />
      </header>
      <main>
        <Container>
           {loading ? (
                  <div className="spinnerr spinnerfaq d-flex justify-content-center align-items-center">
                    <Spinner
                      animation="border"
                      role="status"
                      style={{
                        color: "rgb(157, 64, 244)",
                        width: "3rem",
                        height: "3rem",
                      }}
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
          <Tab.Container activeKey={activeCat} onSelect={handleTabSelect}>
            <Row className="rowtab">
              <Col lg={5} md={10} sm={12} xs={12} className=" offset-md-1 offset-lg-0">
                <Nav  className="flex-column">
                  <div className="CrdTabs">
                  {categories.map((cat) => (
                    <Nav.Item key={cat.id}>
                      <Nav.Link className="TabNav" eventKey={cat.id}>{cat.name}</Nav.Link>
                    </Nav.Item>
                  ))}</div>
                </Nav>
              </Col>
              <Col  lg={6} md={10} sm={12} xs={12} className="offset-lg-1 offset-md-1 Fef">
                <Tab.Content>
                  <Tab.Pane eventKey={activeCat}>
                    {FaqData.map((faq) => (
                       <Accordion className="accC" defaultActiveKey="0">
      <Accordion.Item eventKey={faq.id}>
        <Accordion.Header className="Accheader"> <p>{faq.title}</p>  <span className="custom-arrow"><IoIosArrowDown /></span></Accordion.Header>
        <Accordion.Body>
          <div className="bodyfaq"
  dangerouslySetInnerHTML={{
    __html: truncateHtmlByWords(faq.body, 70),
  }}
/>
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
                    
                        
                     
                  
                      
                    ))}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>   )}
        </Container>
      </main>
      <footer><Footer/></footer>
    </>
  );
};

export default FAQ;
