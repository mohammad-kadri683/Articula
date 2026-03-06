import React, { useContext, useEffect, useState } from "react";
import Navbvar from "../Navbar/Navbvar";
import "../Css/MyArticleList.css";
import { Container, Row, Col } from "react-bootstrap";
import { AuthServices } from "../ApiServices/AuthServices";
import { SignInContext } from "../Context/SignInContext";
import { FaUser } from "react-icons/fa6";
import { NavLink, useNavigate, useParams } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import { FaPlus } from "react-icons/fa";
const MyArticle = () => {
   const Navigate=useNavigate()
  const { uid } = useParams();
  const [loading, setLoading] = useState(true);
  const [ARticleList, SetARticleList] = useState([]);
  const { Userinfo,Insilaized,SetInsilaized } = useContext(SignInContext);
  const [limit, setlimit] = useState(5);
  const ArticleList = () => {
     setLoading(true);
    const credentials = Userinfo.credentials.coded;
    const csrf = Userinfo.credentials.csrf_token;
    console.log("LIMIT SENT TO API:", limit);
    AuthServices.MyArticleList(csrf, credentials, limit)

      .then((data) => {
        console.log(data);
        SetARticleList(data.rows);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Fetch Article Endede");
        setLoading(false);
      });
  };
  useEffect(() => {
    if (!Userinfo || !Userinfo.credentials) return;
    ArticleList();
  }, [Userinfo, limit]);
  const ArticleDelete = (id) => {
    const credentials = Userinfo.credentials.coded;
    const csrf = Userinfo.credentials.csrf_token;
  if (!window.confirm("Are you sure you want to delete this article?")) return;
    AuthServices.DeleteArticle(csrf, credentials,id)
    
      .then(() => {
        ArticleList();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Delete USer is Done");
      });
  };
useEffect(() => {
  if (!Insilaized && !Userinfo?.credentials) {
    Navigate("/SignIn", { replace: true });
  }
}, [Insilaized, Userinfo]);
  
if (Insilaized){
   return <>
   
   </>;
}
 
if (!Userinfo?.credentials) {
  return null;
}
  return (
    <>
      <header>
        <Navbvar />
      </header>
      <main>
        <div className="ArticleList">
          <h1 className="w-100 d-flex justify-content-center">
            My Article List
          </h1>
       
            <Container>
              <Row>
                <Col lg={3} md={6} sm={12} xs={12} className="">
                  <div className="filters mt-3">
                    <select
                      name="select"
                      className="form-select w-100"
                      id="11"
                      onChange={(e) => {
                        setlimit(e.target.value);
                      }}
                    >
                      <option value="5">5 Items</option>
                      <option value="10">10 Items</option>
                      <option value="15">15 Items</option>
                      <option value="20">20 Items</option>
                    </select>
                  </div>
                </Col>
                
                <Col lg={9} md={12} sm={12} xs={12} className="AListt">
                  <Row>
                       {loading ? (
            <>
              <div className="spinnerA spinnedre">
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
            </>
          ) : (
                    ARticleList.map((item) => (
                      <Col lg={4}  md={6} className="mt-3">
                        <div className="cardAList">
                          <div className="imgblogl">
                            <img
                              src={`${"https://tamkeen-dev.com"}${
                                item.field_image
                              }`}
                              alt={item.title}
                            />
                          </div>
                          <p
                            className="mb-1 mt-1"
                            style={{ color: "#000000ff", fontWeight: "700" }}
                            dangerouslySetInnerHTML={{
                              __html:
                                item.title
                                  .replace(/<[^>]*>/g, "") // إزالة الـ HTML tags
                                  .split(" ") // تقسيم النص لكلمات
                                  .slice(0, 7) // أول 15 كلمة
                                  .join(" ") + " ...", // جمعهم مع ثلاث نقاط
                            }}
                          ></p>
                          <p
                            className="mt-0"
                            dangerouslySetInnerHTML={{
                              __html:
                                item.body
                                  .replace(/<[^>]*>/g, "")
                                  .split(" ")
                                  .slice(0, 5)
                                  .join(" ") + " ...",
                            }}
                          ></p>
                          <div className="cardfooter">
                            <div className="d-flex justify-content-between mt-3 down">
                              <p style={{ color: "gray" }}>
                                <FaUser className="me-1 mb-1" /> {item.author}{" "}
                              </p>
                              <p style={{ color: "gray" }}>{item.created}</p>
                            </div>
                            <div className="butoned d-flex justify-content-between">
                              <NavLink to={`/ArticleDetailEdit/${item.id}`}>
                                {" "}
                                <button className="btn-E">Edit</button>
                              </NavLink>
                              <button className="btn-D" onClick={()=>ArticleDelete(item.id)}>
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))
                     )}
                  </Row>
                  
                </Col>
                 
              </Row>
            </Container>
               <div className="plus">
                    <FaPlus className="PlusForm" onClick={() => Navigate("/CArticle")} />
                  </div>
        </div>
      </main>
    </>
  );
};

export default MyArticle;
