import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthServices } from "../ApiServices/AuthServices";
import { SignInContext } from "../Context/SignInContext";
import Navbvar from "../Navbar/Navbvar";
import { Col, Container, Row } from "react-bootstrap";
import "../Css/ArticleDetails.css";
import { FaUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdEditOff } from "react-icons/md";
 import Spinner from 'react-bootstrap/Spinner';
import Categories from "../CustomComponent/Categories";
const ArticleDetails = () => {
 const [loading,setLoading] = useState(true)

const[tags,Settags]=useState([])
const[Categorires,SetCategorires]=useState([])
  
  const [DataDetail, SetDataDetail] = useState();
  const { Userinfo } = useContext(SignInContext);
  const { uid } = useParams();
 
      const selectedTagIds =
  DataDetail?.field_tags?.map(t => Number(t.target_id)) || [];

const selectedTags = tags.filter(tag =>
  selectedTagIds.includes(Number(tag.id))
);

const CatId = Number(DataDetail?.field_category?.[0]?.target_id);

const SelectedCategory = Categorires.find(
  cat => Number(cat.id) === CatId
);

  const ArticleDetail = () => {

    const credentials = Userinfo?.credentials?.coded;
    const csrf = Userinfo?.credentials?.csrf_token;


    AuthServices.ArticleDetails(csrf, credentials, uid)
      .then((data) => {
        console.log(data);
        SetDataDetail(data);
    
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("fecth Detail Ended");
        setLoading(false)
      });
  };
  useEffect(() => {
    ArticleDetail();
  }, [uid]);

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
  useEffect(()=>{
    getCat()
    gettags()
  },[])
  return (
    <>
      <header>
        <Navbvar />
      </header>
      <main>
        <Container>
          <Row>
            {
               (loading)?
    <>
    <div className="spinnerr">
      <Spinner animation="border" role="status"style={{color:"rgb(157, 64, 244)", 
        width:"3rem",
        height:"3rem"
      }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>

    </>:
              <Col lg={10} className="offset-lg-1">
                <div className="articleimg">
                  <div className="edit mb-3 d-flex justify-content-end">

                  </div>
                  <img
                    src={DataDetail?.field_image?.[0].url}
                    alt={DataDetail?.field_image?.[0]?.alt || "Article image"}
                      className="article-image"
                  />
                </div>
                <div className="articletitle mt-4">
                  
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: DataDetail?.title?.[0].value,
                      }}
                    />
                  
                    
                  
                </div>
                <div className="borderDetail"></div>
                <div className="bodys mt-3">
                  
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DataDetail?.body?.[0].value,
                      }}
                    />
               
                  
                </div>
                <div className="borderDetail"></div>
                <div className="d-flex gap-3 mt-3">
                  <p>
                    Created:
                    <span className="ms-2">
                      {DataDetail?.created?.[0]?.value
                        ? new Date(
                            DataDetail.created[0].value
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : ""}
                    </span>
                  </p>
                </div>
                <div className="mt-3">
                  <p>
                    Category:
                    {
                  
    <span key={SelectedCategory.id} className="ms-2 badge bg-secondary">
    {SelectedCategory?.name || "No category"} 
    </span>
  }
                  </p>

                <p>
  Tags:
  {selectedTags.map(tag => (
    <span key={tag.id} className="ms-2 badge bg-secondary">
      {tag.name}
    </span>
  ))}
</p>

                </div>
                <div className="Save d-flex justify-content-center mt-5">
                    
                </div>
              </Col>
            }
          </Row>
        </Container>
      </main>

      <footer></footer>
    </>
  );
};

export default ArticleDetails;
