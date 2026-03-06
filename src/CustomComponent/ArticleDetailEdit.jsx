import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { AuthServices } from "../ApiServices/AuthServices";
import { SignInContext } from "../Context/SignInContext";
import Navbvar from "../Navbar/Navbvar";
import { Col, Container, Row } from "react-bootstrap";
import "../Css/ArticleDetails.css";
import { FaUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdEditOff } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { HiArrowSmLeft } from "react-icons/hi";
import Spinner from "react-bootstrap/Spinner";

const ArticleDetailEdit = () => {
const topRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [Categorires, SetCategorires] = useState([]);
  const [tags, Settags] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const[Isediting,SetIsediting]=useState(false)
  const [EditArticl, SetEditArticl] = useState({
    title: "",
    body: "",
    field_category: [
      {
        target_id: "",
      },
    ],
  });

  const [DataDetail, SetDataDetail] = useState();
  const { Userinfo, Insilaized, SetInsilaized } = useContext(SignInContext);
  const { uid } = useParams();

  const ArticleDetail = () => {
    const credentials = Userinfo?.credentials?.coded;
    const csrf = Userinfo?.credentials?.csrf_token;

    AuthServices.ArticleDetails(csrf, credentials, uid)
      .then((data) => {
        console.log(data);
        SetDataDetail(data);

        SetEditArticl({
          title: data?.title?.[0]?.value || "",
          body: data?.body?.[0]?.value || "",
          field_category: data?.field_category || "",
          field_tags: data?.field_tags || "",
          field_image: data?.field_image || "",
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
        console.log("fecth Detail Ended");
      });
  };
  const ImageBlog = (e) => {
    const file = e.target.files[0];
    if (!file) return;
      setImageFile(file); 
    const preview = URL.createObjectURL(file);
    SetDataDetail((prev) => ({
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
    ArticleDetail();
    getCat();
    gettags();
  }, [uid]);
  const EditArticle = () => {
    const credentials = Userinfo.credentials.coded;
    const csrf = Userinfo?.credentials?.csrf_token;
     SetIsediting(true);
 if (!imageFile) {
    const body = {
      type: [{ target_id: "blog" }],
      title: [{ value: EditArticl.title }],
      body: [{ value: EditArticl.body, format: "full_html" }],
      field_category: EditArticl.field_category,
      field_tags: EditArticl.field_tags,
    };
    AuthServices.ArticleUpdate(csrf, credentials, uid, body)
      .then((data) => {
        console.log(data);

        ArticleDetail();
          topRef.current.scrollIntoView({ behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Edit Article End Ended");
        SetIsediting(false)
      }); 
      return;
    }
  UploadImage().then((imageFid) => {
    const body = {
      type: [{ target_id: "blog" }],
      title: [{ value: EditArticl.title }],
      body: [{ value: EditArticl.body, format: "full_html" }],
      field_category: EditArticl.field_category,
      field_tags: EditArticl.field_tags,
      field_image: [{ target_id: imageFid }],
    };

    AuthServices.ArticleUpdate(csrf, credentials, uid, body)
      .then(() => ArticleDetail())
      .catch((err) => console.log(err.message));
  });
  };

  
const UploadImage=()=>{
      const credentials = Userinfo?.credentials?.coded;
    const csrf = Userinfo?.credentials?.csrf_token;
      if (!imageFile) {
    return Promise.resolve(null); 
  }
    return AuthServices.UploadImage(csrf,credentials,imageFile)
    .then((data)=>{
        return data.fid[0].value;
    })
    .catch((err)=>{
      console.log(err.message)
      return null
    })
    .finally(()=>{
      console.log("Upload Image Ended")
       SetIsediting(false)
    })
    
}
  return (
    <>
      <header ref={topRef}>
        <Navbvar />
      </header>
      <main>
        <Container>
          <Row className="d-flex justify-content-center">
            {loading ? (
              <>
                <div className="spinnerr">
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
              <Col lg={10}>
                <div className="cardEditMy">
                  <div className="d-flex align-items-center gap-2">
                    <span className="Active"></span>
                    <h4 style={{ color: "gray" }}>Edit Active</h4>
                  </div>

                  <div className="media mt-4">
                    <strong className="d-block mb-2 ms-1">Media Photo</strong>

                    <img
                      className="mdeia"
                      src={
                        DataDetail?.field_image?.[0]?.preview ||
                        DataDetail?.field_image?.[0]?.url
                      }
                    />
                    <div className="but">
                      <input
                        type="file"
                        accept="image/*"
                        id="UploadPhoto"
                        className="d-none"
                        onChange={ImageBlog}
                      />
                      <button
                        onClick={() =>
                          document.getElementById("UploadPhoto").click()
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="TitleE mt-4">
                    <strong className="d-block mb-2 ms-1">Article Title</strong>
                    <input
                      className="form-control formin"
                      type="text"
                      value={EditArticl.title}
                      onChange={(e) => {
                        SetEditArticl({
                          ...EditArticl,
                          title: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="boddy mt-3">
                    <strong className="d-block mb-2 ms-1">
                      Article Content
                    </strong>
                    <textarea
                      className="form-control formin"
                      rows={6}
                      type="text"
                      value={EditArticl.body}
                      onChange={(e) => {
                        SetEditArticl({
                          ...EditArticl,
                          body: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <label className="mt-2">
                    <strong>Category</strong>
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
                          EditArticl.field_category[0].target_id ===
                          Number(item.id)
                        }
                        onChange={(e) =>
                          SetEditArticl((prev) => ({
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

                  <label>
                    <strong className="">Tags</strong>
                  </label>
                  {tags.map((tag) => (
                    <div key={tag.id} className="form-check">
                      <input
                        checked={EditArticl.field_tags?.some(
                          (t) => t.target_id === Number(tag.id)
                        )}
                        type="checkbox"
                        className="form-check-input"
                        id={`tag--${tag.id}`}
                        value={tag.id}
                        onChange={(e) => {
                          // console.log(e)

                          e.target.checked
                            ? SetEditArticl({
                                ...EditArticl,
                                field_tags: [
                                  ...EditArticl.field_tags,
                                  { target_id: Number(e.target.value) },
                                ],
                              })
                            : SetEditArticl({
                                ...EditArticl,
                                field_tags: [
                                  ...EditArticl.field_tags.filter(
                                    (prev) =>
                                      prev.target_id != Number(e.target.value)
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

                  <div className="btSave d-flex align-items-center gap-4 mt-4">
                   <button
  disabled={Isediting||
    (
      EditArticl.title === (DataDetail?.title?.[0]?.value) &&
      EditArticl.body === (DataDetail?.body?.[0]?.value ) &&
      EditArticl.field_category[0].target_id === (DataDetail?.field_category?.[0]?.target_id ) &&
      JSON.stringify(EditArticl.field_tags || []) === JSON.stringify(DataDetail?.field_tags) &&
      !imageFile
    )
  } 
  onClick={EditArticle}
  className="SaveChangebt"
>
  {Isediting ? "Processing..." : "Save Changes"}
  <FaSave className="ms-2" style={{ color: "white", fontSize: "18px" }} />
</button>
                    <button
                      onClick={() => navigate("/MyArticle")}
                      className="cancelbtn"
                    >
                      {" "}
                      <HiArrowSmLeft
                        style={{ fontSize: "23px" }}
                        className="me-2 "
                      />
                      Cancel
                    </button>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default ArticleDetailEdit;
