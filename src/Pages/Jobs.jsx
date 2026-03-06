import React from "react";
import Navbvar from "../Navbar/Navbvar";
import "../Css/Jobs.css";
import JobsSwiper1 from "../Swipers/JobsSwiper1";
import { Col, Container, Row } from "react-bootstrap";
import JobsSwiper2 from "../Swipers/JobsSwiper2";
import Footer from '../CustomComponent/Footer'
import OJOpprtunities from "../Swipers/OJOpprtunities";

const Jobs = () => {
  const JoinUSArr = [
    {
      img: "/Images/Image.jobs/CheckCircle.png",
      title: "Ut justo ligula, vehicula sed <br /> egestas vel.",
      body: "Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat  felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. ",
    },
    {
      img: "/Images/Image.jobs/CheckCircle.png",
      title: "Aenean vitae leo leo praesent <br/> ullamcorper ac.",
      body: "Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.",
    },
    {
      img: "/Images/Image.jobs/CheckCircle.png",
      title: "Ut justo ligula, vehicula sed <br /> egestas vel.",
      body: "Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat  felis. Vestibulum non consectetur tortor. Morbi at orci  vehicula, vehicula mi ut, vestibulum odio. ",
    },
  ];
  return (
    <>
      <header>
        <Navbvar />
      </header>
      <main>
        <section>
          {" "}
          <JobsSwiper1 />
        </section>
        <div className="join-us pb-5">
          <Container>
            <Row className="mt-4">
              <Col lg={6} md={12} className="mt-5">
                <div className="textjoin mt-4">
                  <h2>Why you will join our team</h2>
                  <p className="mt-4">
                    Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                    felis. Vestibulum non <br />
                    consectetur tortor. Morbi at orci vehicula, vehicula mi ut,
                    vestibulum odio.{" "}
                  </p>
                </div>
                <div className="CardJoin">
                  {JoinUSArr.map((pice) => (
                    <div className="smalcardJ mt-lg-5 mt-md-5">
                      <div className="checkCircle text-center mt-3">
                        <img src={pice.img} alt={pice.title} />
                        <strong
                          className="mt-2 d-block"
                          dangerouslySetInnerHTML={{ __html: pice.title }}
                        />

                        <p
                          className="mt-1"
                          dangerouslySetInnerHTML={{ __html: pice.body }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={6} md={10} sm={12} xs={12} className="JoinUsImg offset-md-1 offset-lg-0">
                <div className="imgjoin w-100">
                  <img className="w-100" src="Images/Image.jobs/OBJECTS.png" alt="join US" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <div className="mt-5">
          <JobsSwiper2 />
      </div>
<div className=" pt-5 mt-5   ">
  <OJOpprtunities />
</div>

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Jobs;
