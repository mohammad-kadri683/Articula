import React, { useContext, useEffect, useRef, useState } from "react";
import Navbvar from "../Navbar/Navbvar";
import { FaPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import "../Css/Article.css";
import { SignInContext } from "../Context/SignInContext";
import { AuthServices } from "../ApiServices/AuthServices";
import { FaUser } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import Spinner from "react-bootstrap/Spinner";

const Articles = () => {
  const [selectedCategories, setSelectedCategories] = useState();
  const [Categorires, SetCategorires] = useState([]);
  const CateFilter = selectedCategories?.field_category?.[0]?.target_id;
  const topRef = useRef(null);
  const [Page, SetPage] = useState(1);
  const [PageCount, SetPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [SORT_BY, SetSORT_BY] = useState("created_date");
  const [SortO, SetSortO] = useState("DESC");
  const [Search, SetSearch] = useState("");

  const { Userinfo, Insilaized } = useContext(SignInContext);
  const navigate = useNavigate();
  const [BlogList, SetBlogList] = useState([]);
  const [limit, setlimit] = useState(5);
  const Navigate = useNavigate();
  const BlogListt = () => {
    setLoading(true);
    const credentials = Userinfo.credentials.coded;
    const csrf = Userinfo.credentials.csrf_token;

    AuthServices.BlogList(
      csrf,
      credentials,
      limit,
      Search,
      SortO,
      SORT_BY,
      Page - 1,
      CateFilter || ""
    )
      .then((data) => {
        console.log(data);
        SetBlogList(data.rows);
        SetPageCount(data.pager.total_pages);
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Fetch Blog Ended");
        setLoading(false);
      });
  };
  useEffect(() => {
    if (!Userinfo || !Userinfo.credentials) return;
    BlogListt();
  }, [Userinfo, limit, Search, SortO, Page, SORT_BY, CateFilter]);

useEffect(() => {
  if (!Insilaized && !Userinfo?.credentials) {
    navigate("/SignIn", { replace: true });
  }
}, [Insilaized, Userinfo]);
  const getCat = () => {
    AuthServices.getCategories()
      .then((data) => {
        console.log(data);
        SetCategorires(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Category Fetch Ended");
      });
  };
  useEffect(() => {
    getCat();
  }, []);
if (Insilaized){
   return <>
   
   </>;
}
 
if (!Userinfo?.credentials) {
  return null;
}

  return (
    <>
      <header ref={topRef}>
        <Navbvar />
      </header>
      <main>
        <div className="Alist">
          <Container>
            <Row>
              <Col lg={3} className="Blogli">
                <div className="filters  mt-3">
                  <select
                    name="select"
                    className="form-select w-100"
                    id="11"
                    onChange={(e) => {
                      setlimit(e.target.value);
                      SetPage(1);
                    }}
                  >
                    <option value="5">5 Items</option>
                    <option value="10">10 Items</option>
                    <option value="15">15 Items</option>
                    <option value="20">20 Items</option>
                  </select>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter Search"
                    onInput={(e) => {
                      SetSearch(e.target.value);
                      SetPage(1);
                    }}
                  />
                  <select
                    name="sort"
                    id="sort"
                    className="form-select mt-3"
                    onChange={(e) => {
                      SetSortO(e.target.value);
                      SetPage(1);
                    }}
                  >
                    <option value="DESC">Desending</option>
                    <option value="ASC">Asending</option>
                  </select>
                </div>
                <div className="categoryy mt-3  w-100">
                  <label>
                    <strong className="">Category</strong>
                  </label>
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id="cat-all"
                      checked={!selectedCategories?.field_category?.length}
                      onChange={() =>
                        setSelectedCategories({ field_category: [] })
                      }
                    />
                    <label className="form-check-label" htmlFor="cat-all">
                      All
                    </label>
                  </div>

                  {Categorires.map((item) => (
                    <div className="form-check mt-2" key={item.id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id={`cat-${item.id}`}
                        value={item.id}
                        checked={
                          selectedCategories?.field_category[0]?.target_id ===
                          Number(item.id)
                        }
                        onChange={(e) =>
                          setSelectedCategories((prev) => ({
                            ...prev,
                            field_category: [
                              { target_id: Number(e.target.value) },
                            ],
                          }))
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`cat-${item.id}`}
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </Col>

              <Col lg={9}>
                {loading ? (
                  <div className="spinnerr d-flex justify-content-center align-items-center">
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
                  <>
                    <Row className="Blogli">
                      {BlogList.map((item) => (
                        <Col lg={4} className="mt-3" key={item.id}>
                          <NavLink
                            style={{
                              listStyleType: "none",
                              color: "black",
                              textDecoration: "none",
                            }}
                            to={`/ArticleDetails/${item.id}`}
                          >
                            <div className="cardAList">
                              <div className="imgblogl">
                                <img
                                  src={`https://tamkeen-dev.com${item.field_image}`}
                                  alt={item.title}
                                />
                              </div>

                              <p
                                className="mb-1 mt-1"
                                style={{ color: "#000", fontWeight: 700 }}
                              >
                                {String(item.title || "")
                                  .replace(/<[^>]*>/g, "")
                                  .split(" ")
                                  .slice(0, 7)
                                  .join(" ")}{" "}
                                ...
                              </p>

                              <p className="mt-0">
                                {(item.body?.value || "")
                                  .replace(/<[^>]*>/g, "")
                                  .split(" ")
                                  .slice(0, 15)
                                  .join(" ")}{" "}
                                ...
                              </p>
                              <div className="cardfooter">
                                <div className="d-flex justify-content-between mt-3 down">
                                  <p style={{ color: "gray" }}>
                                    <FaUser className="me-1 mb-1" />{" "}
                                    {item.author}
                                  </p>
                                  <p style={{ color: "gray" }}>
                                    {item.created}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </Col>
                      ))}
                    </Row>

                    <ReactPaginate
                      previousLabel={"← Prev"}
                      nextLabel={"Next →"}
                      pageCount={PageCount}
                      forcePage={Page - 1}
                      onPageChange={(e) => SetPage(e.selected + 1)}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                      previousClassName={"previous"}
                      nextClassName={"next"}
                    />
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="plus">
          <FaPlus className="PlusForm" onClick={() => navigate("/CArticle")} />
        </div>
      </main>
    </>
  );
};

export default Articles;
