import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SignInContext } from '../Context/SignInContext'
import { AuthServices } from '../ApiServices/AuthServices'
import Navbvar from '../Navbar/Navbvar'
import { useNavigate } from 'react-router'
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import "../Css/Article.css";
import { NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const Dashb = () => {
  const [totalUser, setTotalUser] = useState(0);
const [totalArticles, setTotalArticles] = useState(0);
  const [BlogList, SetBlogList] = useState([]);
  const navigate = useNavigate();
  const { Userinfo,Insilaized } = useContext(SignInContext)
  const [DataDash, SetDataDash] = useState([])

  const extractDate = (htmlTime) => {
    if (!htmlTime) return null;
    const match = htmlTime.match(/datetime="([^"]+)"/);
    return match ? match[1] : null;
  };

  const Username = Userinfo?.UserData?.current_user?.name || [];

  const Dashboard = () => {
    const credentials = Userinfo.credentials.coded
    AuthServices.UsersList(credentials)
      .then((data) => {
        SetDataDash(data.rows)
        setTotalUser(data.pager.total_items)
      })
      .catch((err) => {
        console.log(err.message)
      })
      .finally(() => {
        console.log("Dashboard Data Ended")
      })
  }

  const BlogListt = () => {
    const credentials = Userinfo.credentials.coded;
    const csrf = Userinfo.credentials.csrf_token;

    AuthServices.BlogListDash(csrf, credentials)
      .then((data) => {
        console.log(data.rows);
        SetBlogList(data.rows);
  setTotalArticles(Number(data.pager.total_items));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Fetch Blog Ended");
      });
  };
  

  useEffect(() => {
    if (Userinfo?.credentials?.coded) {
        if (!Userinfo) return navigate('SignIn');
          if (!Username.includes("tamkeen")) return navigate('/');
      Dashboard()
      BlogListt()
    }
  }, [Userinfo])


if (Insilaized){
   return <>
   
   </>;
}

  return (
    <>
      <header><Navbvar /></header>

      <main>
        <Container>
          <Tab.Container defaultActiveKey="users">
            <Row>

              {/* CONTENT */}
              <Col lg={10} md={12} sm={12} xs={12}>
                <Tab.Content>

                  <Tab.Pane eventKey="users">
                    <div className="jasddad d-flex justify-content-center  offset-lg-2  ">
                      <h1 className="mt-5 usedashh">Users List</h1>
                                
                    </div>   

                    <div className="Userlistdash">
                      
                      <div className="dashuser">
                        <p className=' d-block' style={{ fontWeight: 600, color: "#555" }}>Total Users: {totalUser}</p>
                        <table className="table">
                          <thead className="border-col">
                            <tr>
                              <th>id</th>
                              <th>U-Img</th>
                              <th>UserName</th>
                              <th>Email</th>
                              <th>Created</th>
                              <th>Status</th>
                            </tr>
                          </thead>

                          <tbody>
                            {DataDash.map((item) => (
                              <tr key={item.uid}>
                                <td>{item.uid}</td>
                                <td>
                                  <img
                                    className="imgusd"
                                    src={
                                      item.user_picture
                                        ? `https://tamkeen-dev.com${item.user_picture.split('src="')[1].split('"')[0]}`
                                        : "/Images/imageNav/user.png"
                                    }
                                    alt="userpic"
                                  />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.mail}</td>
                                <td>
                                  {item?.created && extractDate(item.created)
                                    ? new Date(extractDate(item.created)).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })
                                    : ""}
                                </td>
                              <div className="active-gre">
                                  <td>{item.status == 1 ? "Active" : "nonActive"}</td>
                              </div>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <div className="d-flex justify-content-center offset-lg-2 mt-5">
                      <h1 className=" usedashh">Article List</h1>
                      
                    </div>  
                    <Row className="Blogli mt-5">
                      <p style={{ fontWeight: 600, color: "#555" }}>Total Articles: {totalArticles}</p>
                      {BlogList.map((item) => (
                        <Col lg={4} className="mt-3" key={item.id}>
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
                                                      <button className="btn-D" onClick={()=>(item.id)}>
                                                        Delete
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                </Tab.Content>
              </Col>

              {/* TABS */}
              <Col lg={2} md={6} sm={12} xs={12}>
                <div className="backCod carddashes">
                  <Nav variant="pills" className="flex-column ">
                    <Nav.Item>
                      <Nav.Link eventKey="users">     <FaUser className="me-1 mb-1 ms-1" />Users List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> <MdArticle  className="me-1 mb-1" style={{fontSize:"22px"}} />Article List</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>

            </Row>
          </Tab.Container>
        </Container>
      </main>
    </>
  )
}

export default Dashb
