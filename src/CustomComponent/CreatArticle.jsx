import React, { useContext, useEffect, useRef, useState } from "react";
import Navbvar from "../Navbar/Navbvar";
import "../Css/Article.css";
import { Col, Container, Row } from "react-bootstrap";
import { AuthServices } from "../ApiServices/AuthServices";
import { SignInContext } from "../Context/SignInContext";
import { useNavigate } from "react-router";
import { FiUpload } from "react-icons/fi";
const CreatArticle = () => {

  const { Userinfo } = useContext(SignInContext);
  const navigate = useNavigate();
  const [Categorires, SetCategorires] = useState([]);
  const [tags, Settags] = useState([]);

      const[Isediting,SetIsediting]=useState(false)
  const [BlogInfo, SetBlogInfo] = useState({
    type: [
      {
        target_id: "article",
      },
    ],
    title: [
      {
        value: "",
      },
    ],
    body: [
      {
        value: "",
        format: "",
      },
    ],
    field_image: [
      {
        target_id: "",
        file: null,
        preview: null,
      },
    ],
    field_gallery: [
      {
        target_id: "",
      },
      {
        target_id: "",
      },
    ],
   field_tags: [],
    field_category: [
      {
        target_id: "",
      },
    ],
  });

  const CreatBlog = (e) => {
    console.log("Userinfo:", Userinfo);
    console.log("CRED:", Userinfo?.credentials);
SetIsediting(true)
    e.preventDefault();
    if (!Userinfo || !Userinfo.credentials) {
      {
        navigate("/SignIn");
      }
      return;
    }

    const credentials = Userinfo.credentials.coded;
    const csrf = Userinfo.credentials.csrf_token;

    const file = BlogInfo.field_image[0].file;

    AuthServices.IMageArticle(csrf, credentials, file)
      .then((uploaded) => {
        const imageId = uploaded.fid[0].value;

        const payload = {
          type: [{ target_id: "blog" }],
          title: [{ value: BlogInfo.title[0].value }],
          body: [{ value: BlogInfo.body[0].value }],
          field_image: BlogInfo.field_image[0].file
            ? [{ target_id: imageId }]
            : [],
          field_gallery: [{ target_id: 202 }, { target_id: 180 }],
          field_tags: BlogInfo.field_tags,
          field_category: BlogInfo.field_category,
        };

        return AuthServices.CreatBlog(csrf, credentials, payload);
      })
      .then((data) => {
         
        console.log("BLOG CREATED WITH IMAGE:", data);
     navigate("/Articles")
            
      })
      .catch((err) => console.log(err.message))
  .finally(() => {
    console.log("create blog end");
    SetIsediting(false);
  });
  };


  const ImageBlog = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    SetBlogInfo((prev) => ({
      ...prev,
      field_image: [{ ...prev.field_image[0], file, preview }],
    }));
  };

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
  const gettags = () => {
    AuthServices.getTAGS()
      .then((data) => {
        console.log(data);
        Settags(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("tags Fetch Ended");
      });
  };
  useEffect(() => {
    getCat();
    gettags();
  }, []);

  return (
    <>
     <header> <Navbvar  /></header>
    
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={8}>
            <div className={"formaset"}>
              <div className="beginTi">
                <h4>Create New Article</h4>
                <p className="mt-3">Share your thoughts with the world</p>
              </div>

              <form onSubmit={CreatBlog}>
                <div className="titleBlog mt-3">
                  <label>
                    <strong>Title </strong>
                  </label>
                  <input
                    type="text"
                    placeholder=" Enter The Article Title "
                    className="form-control Custom-Form mt-2"
                    onInput={(e) => {
                      SetBlogInfo({
                        ...BlogInfo,
                        title: [{ value: e.target.value }],
                      });
                    }}
                  />
                </div>

                <div className="BodyBlog mt-4">
                  <label>
                    <strong>Body</strong>
                  </label>
                  <textarea
                    className="form-control Custom-Form mt-1"
                    rows="8"
                    placeholder="Write the blog content here..."
                    onInput={(e) => {
                      SetBlogInfo({
                        ...BlogInfo,
                        body: [{ value: e.target.value, format: "basic_html" }],
                      });
                    }}
                  />
                </div>
                <div className="imgUpload w-100 mt-4">
                  <strong>Media</strong>

                  <input
                    type="file"
                    accept="image/*"
                    id="UploadPhoto"
                    className="d-none"
                    onChange={ImageBlog}
                  />
                  <div
                    className=" Custom-Form w-100"
                    onClick={() =>
                      document.getElementById("UploadPhoto").click()
                    }
                  >
                    {BlogInfo.field_image[0].preview ? (
                      <img
                        style={{ cursor: "pointer" }}
                        src={BlogInfo.field_image[0].preview}
                        alt="default"
                      />
                    ) : (
                      <div className="w-100 cardUpload">
                        <div className="iccD d-flex  flex-column  align-items-center  justify-content-center ">
                          <FiUpload style={{ fontSize: "35px" }} />
                          <strong className="mt-2">
                            Click to Upload image
                          </strong>
                          <p
                            className="mt-2"
                            style={{ color: "gray", fontSize: "14px" }}
                          >
                            Png,JPG up to 5MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="categoryy mt-2 w-100">
                  <label>
                    <strong className="">Category</strong>
                  </label>

                  {Categorires.map((item) => (
                    <div className="form-check mt-2" key={item.id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id={`cat-${item.id}`}
                        value={item.id}
                        checked={
                          BlogInfo.field_category[0].target_id ===
                          Number(item.id)
                        }
                        onChange={(e) =>
                          SetBlogInfo((prev) => ({
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

                <label>
                  <strong className="">Tags</strong>
                </label>
                {tags.map((tag) => (
                  <div key={tag.id} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`tag--${tag.id}`}
                      value={tag.id}
                      onChange={(e) => {
                      

                        e.target.checked
                          ? SetBlogInfo({
                              ...BlogInfo,
                              field_tags: [
                                ...BlogInfo.field_tags,
                                { target_id: Number( e.target.value) },
                              ],
                            })
                          : SetBlogInfo({
                              ...BlogInfo,
                              field_tags: [
                                ...BlogInfo.field_tags.filter(
                                  (prev) => prev.target_id != Number( e.target.value)
                                ),
                              ],
                            });
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`tag--${tag.id}`}
                    >
                      {tag.name}
                    </label>
                  </div>
                ))}

                <div className="botonp mt-2 w-100 ">
                  <button className="btnCre  " type="submit" disabled={Isediting}>
              {Isediting?"...Creating":
              "Create Blog"  }
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreatArticle;
