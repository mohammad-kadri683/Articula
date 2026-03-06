import React, { useContext, useEffect, useRef, useState } from "react";
import Navbvar from "../Navbar/Navbvar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Sign&Resgister.css";
import { Container, Row, Col } from "react-bootstrap";
import { AuthServices } from "../ApiServices/AuthServices";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { TbCheckbox } from "react-icons/tb";
import { SignInContext } from "../Context/SignInContext";
import { useNavigate } from "react-router";


const CreateAcc = () => {

  const{Userinfo,setUserinfo,Insilaized} = useContext (SignInContext)
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState();
  const [agree,setagree]=useState(false)
 const navigate = useNavigate()

  const [showHide, setShowHide] = useState({
    pass: "password",
    confirm: "password",
  });

  const [passValue, setPassValue] = useState({
    pass: "",
    confirm: "",
  });
  const [ResgisterData, setResgisterData] = useState({
    name: {
      value: "",
    },
    field_name: {
      value: "",
    },
    field_surname: {
      value: "",
    },
    mail: {
      value: "",
    },
    field_mobile: {
      value: "",
    },
    field_gender: {
      target_id: 9,
    },
    field_how_did_you_find_us: [{ target_id: 18 }, { target_id: 15 }],
    pass: {
      value: "",
    },
  });


useEffect(() => {
  if (!Insilaized&&Userinfo) {  
    navigate("/", { replace: true });
  }
}, [Userinfo,Insilaized,navigate]);


  const getregister = () => {
    setLoading(true);
    AuthServices.MAkeRegistrishon(ResgisterData)

      .then((data) => {
        console.log( data);
            alert("Your request has been received. Please check your email to complete the registration.")
        navigate('/')
     
   
      })
      .catch((err) => {
        console.error( err.message);
        setError(err.message);
      })
      .finally(() => {
        console.log("Fecth ended");
        setLoading(false);
        
      });
  };
if (Insilaized){
   return (
    <>
    
    </>
   )
}
if (Userinfo?.credentials) {
  return null;
}
  return (
    <div>
      <header>
        <Navbvar empty mode="register" />
      </header>
      <main className="mainSign">
        <Container>
          <Row>
       <Col lg={6} md={12} sm={12} xs={12} data-aos="fade-right" data-aos-delay={200}>
          
      <div className="imgRi">
        <img src="/Images/images.page1/Group 1000006183.png" alt="images of an article" />
      </div>
      
          </Col>
            <Col lg={6} md={12} sm={12} xs={12} className="mt-5 dda" data-aos="fade-left" data-aos-delay={200}>
              <div className="d-flex justify-content-center">
                <h1 className="mt-4">Create your account</h1>
              </div>
              <div className="form">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if(passValue.pass!==passValue.confirm){
                 
                      return;
                    }
                    getregister();
                  }}
                >
              
                    <div className="lan ms-lg-5 mt-3">
                      {" "}
                      <label htmlFor="email" className="">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name "
                        className="form-control w-100   mt-2"
                        onInput={(e) => {
                          setResgisterData({
                            ...ResgisterData,
                            field_name: {
                              value: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>

                    <div className="lan ms-lg-5 mt-3">
                      {" "}
                      <label htmlFor="email" className="">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control  w-100   mt-2"
                        onInput={(e) => {
                          setResgisterData({
                            ...ResgisterData,
                            field_surname: {
                              value: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
               

    <div className="ms-lg-5">
                    <label htmlFor="mobile" className="mt-3">
                    mobile
                  </label>
                  <input
                    type="number"
                    placeholder="ex: 963 000 0000"
                    className="form-control w-100  "
                    onInput={(e) => {
                      setResgisterData({
                        ...ResgisterData,
                        field_mobile: {
                          value: e.target.value,
                        },
                      });
                    }}
                  />
    </div>

                <div className="USer ms-lg-5">
                    <label htmlFor="User Name" className=" mt-3">
                    User Name
                  </label>
                  <input
                    type="text"
                    placeholder="Username..."
                    className="form-control w-100  "
                    onInput={(e) => {
                      setResgisterData({
                        ...ResgisterData,
                        name: {
                          value: e.target.value,
                        },
                      });
                    }}
                  />
                </div>

                 <div className="email ms-lg-5">
                   <label htmlFor="Email" className=" mt-3">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-control w-100"
                    onInput={(e) => {
                      setResgisterData({
                        ...ResgisterData,
                        mail: {
                          value: e.target.value,
                        },
                      });
                    }}
                  />
                 </div>

                  <div className="d-flex gap-3 ms-lg-5   mt-3">
                    <div className="lan w-100">
                      {" "}
                      <label htmlFor="email" className="">
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={showHide.pass}
                          placeholder="Password"
                          className="form-control   mt-2 position-relative"
                          required
                          onInput={(e) => {
                            setResgisterData({
                              ...ResgisterData,
                              pass: {
                                value: e.target.value,
                              },
                            });

                            setPassValue({
                              ...passValue,
                              pass: e.target.value,
                            });
                          }}
                        />
                        <button
                          className="eye-btnn"
                          type="button"
                          onClick={() => {
                            setShowHide({
                              ...showHide,
                              pass:
                                showHide.pass == "password"
                                  ? "text"
                                  : "password",
                            });
                          }}
                        >
                          {showHide.pass == "password" ? (
                            <BsEyeFill />
                          ) : (
                            <BsEyeSlashFill />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="lan w-100">
                      {" "}
                      <label htmlFor="email" className="">
                        Confirm Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={showHide.confirm}
                          placeholder="Confirm Password"
                          className="form-control  mt-2 position-relative"
                          required
                          onInput={(e) => {
                            setPassValue({
                              ...passValue,
                              confirm: e.target.value,
                            });
                          }}
                        />
                        <button
                          className="eye-btnn "
                          type="button"
                          onClick={() => {
                            setShowHide({
                              ...showHide,
                              confirm:
                                showHide.confirm == "password"
                                  ? "text"
                                  : "password",
                            });
                          }}
                        >
                          {showHide.confirm == "password" ? (
                            <BsEyeFill />
                          ) : (
                            <BsEyeSlashFill />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  {passValue.confirm ? (
                    passValue.confirm !== passValue.pass ? (
                      <div className="alertss p-2 ms-5 w-100 my-2">
                        Password Do Not Match
                      
                      </div>
                      
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}

                  <div className="d-flex justify-content-between  align-items-center ms-0 ms-lg-5 mt-4">
                    <div className="d-flex gap-2 align-items-center ms-1 terms">
                      {" "}
                      <input type="checkbox" checked={agree} onChange={((e)=>{
                        setagree(e.target.checked)
                      })} />
                       <label className="labs">I Agree with all of</label>
                      <a className="labs" href="#">your Terms & Conditions</a>
                    </div>

                    <button
                      className="btn btn-move"
                      disabled={
                        Loading ||
                        ResgisterData.name.value.length < 4 ||
                        ResgisterData.field_name.value.length < 4 ||
                        ResgisterData.field_surname.value.length < 4 ||
                        ResgisterData.pass.value.length < 4 ||
                        ResgisterData.field_mobile.value.length < 9||
                        !agree
                        
                      }
                    >
                      {Loading ? <i>...Creating User </i> : "Creat New User"}
                    </button>
                  </div>
                  {Error ? (
                    <div className="alert alert-warning mt-2 ms-5">{Error}</div>
                  ) : (
                    ""
                  )}
                </form>
                <div className="d-flex align-items-center mt-4 ms-lg-5">
                  <div className="flex-grow-1 border-top"></div>
                  <span className="mx-3 text-muted">Or Sign Up With</span>
                  <div className="flex-grow-1 border-top"></div>
                </div>
                <div className="d-flex align-items-center justify-content-between ms-lg-5 mt-2">
                  <a
                    href="#"
                    className="a-gog d-flex gap-2 align-items-center item1"
                  >
                    <div className="google">
                      <img
                        src="..\public\Images\images.page1\search 1.png"
                        alt="google"
                      />
                    </div>
                    <p className="mb-0">google</p>
                  </a>
                  <a
                    href="#"
                    className="a-gog d-flex gap-2 align-items-center item1"
                  >
                    <div className="google">
                      <img
                        src="..\public\Images\images.page1\facebook 1.png"
                        alt="google"
                      />
                    </div>
                    <p className="mb-0">facebook</p>
                  </a>
                  <a
                    href="#"
                    className="a-gog d-flex gap-2 align-items-center item1"
                  >
                    <div className="google">
                      <img
                        src="..\public\Images\images.page1\apple 2.png"
                        alt="google"
                      />
                    </div>
                    <p className="mb-0">Apple</p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default CreateAcc;
