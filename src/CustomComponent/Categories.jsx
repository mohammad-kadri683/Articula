import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { AuthServices } from "../ApiServices/AuthServices";
const Categories = () => {
  const [Category, SetCategory] = useState([]);

  
  const getCategory = () => {


    AuthServices.getCategories()
      .then((data) => {
        
let finalData = [...data, ...data]; 
finalData = finalData.slice(0, 6);
SetCategory(finalData);
      })

      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        console.log("Fecth ended");
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="margins">
        <Container>
          <Row className="">
            <Col lg={12}>
              <div className="d-flex align-items-center browsfa w-100 justify-content-between">
                <div className="Brows">
                  <a href="#" className="purble">
                    {" "}
                    <span className="me-2">
                      <FaArrowRight className="me-2" /> Browse All
                    </span>{" "}
                    We have more category & subcategory.
                  </a>
                </div>
                <div className="BrowsA">
                  <h2>Browse Our Articles Categories</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            {Category.map((Cats, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <div className="cardCpu">
                  <div className="imgCpu d-flex justify-content-center w-100">
                    <img
                      src={
                        index % 2 == 0
                          ? "public/Images/images.page1/image.category/Cpu.png"
                          : "public/Images/images.page1/image.category/Cpu (1).png"
                      }
                      alt="image of Cpu"
                    />
                  </div>
                  <div
                    className="SmCpu"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#F3EFFE" : "#FFF6E5",
                    }}
                  >
                    <div className="titlelss">
                      <h5 className="text-center mt-5">{Cats.name}</h5>
                      <p className="text-center mt-4">
                        {" "}
                        Discover high-quality articles written <br /> by experts
                        and creators.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
