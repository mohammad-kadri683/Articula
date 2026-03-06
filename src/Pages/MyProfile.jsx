import React, { useContext, useEffect, useState } from "react";
import Navbvar from "../Navbar/Navbvar";
import { Col, Container, Row } from "react-bootstrap";
import { AuthServices } from "../ApiServices/AuthServices";
import { SignInContext } from "../Context/SignInContext";
import { ApiConfig } from "../Api/ApiConfig";
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";
import { Spinner } from "react-bootstrap";
const MyProfile = () => {
const [imageLoading, setImageLoading] = useState(false);
  const [Error, setError] = useState();
    const [loading, setLoading] = useState(true);
  const navigate =useNavigate()
  const [loadingedit,Setloadingedit]=useState(false)
  const { Userinfo,setUserinfo } = useContext(SignInContext);
  const [CurrentUser, SetCurrentUser] = useState({});
  const { localUserImage, setLocalUserImage } = useContext(SignInContext);
  const [isediting, setisediting] = useState(false);

  const originalName = CurrentUser?.name?.[0]?.value;
const originalMail = CurrentUser?.mail?.[0]?.value;

  const [EditData, setEditData] = useState({
    field_name: "",
    field_surname: "",
    mail: "",
    field_mobile: "",
    user_picture: "",
  currentPassword: "",
  newPassword: "",
  name:"",
  
  }); 

  const logout = () => {
        localStorage.removeItem("UserData");
        setUserinfo(null);
  navigate("/SignIn", { replace: true });
};

  const uid = Userinfo?.UserData?.current_user?.uid;
  const getCuurentUser = () => {
    setLoading(true)
    const credentials = Userinfo.credentials.coded;


    AuthServices.getUserInfo(credentials, uid)
      .then((data) => {
        console.log(data);
        SetCurrentUser(data);
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        console.log("Fecth ended");
      });
  };
  useEffect(() => {
    if (Userinfo) {
      getCuurentUser();
    }
  }, [Userinfo]);

  const Userimage = (e) => {
    const csrfToken = Userinfo?.credentials.csrf_token;
    const authHeader = Userinfo?.credentials.coded;
    if (!csrfToken || !authHeader) {
      console.log("Not Define Csrftoken or AUthheader");
      return;
    }
    
    const file = e.target.files[0];
    if (!file) return;
  setImageLoading(true);
    AuthServices.UserImage(csrfToken, authHeader, file)
      .then((data) => {
        console.log(data);

        const imageUrl = data.uri[0].url;
 const fid= data.fid[0].value;
        SetCurrentUser((prev) => ({
          ...prev,
            user_picture: fid,
        }));
        setLocalUserImage(imageUrl);
        if (uid) localStorage.setItem(`user_picture_${uid}`, imageUrl);
        setEditData((prev) => ({
          ...prev,
            user_picture: fid,
        }));
      })

      .catch((err) => console.error(err.message))
          .finally(() => {
      setImageLoading(false); 
    });
  };

  const RemoveImage = () => {
    setLocalUserImage(null);
    SetCurrentUser((prev) => ({
      ...prev,
      user_picture: [],
    }));
    localStorage.removeItem(`user_picture_${uid}`);
  };

  useEffect(() => {
    if (CurrentUser) {
      setEditData({
        name:CurrentUser?.name?.[0]?.value || "",
        field_name: CurrentUser?.field_name?.[0]?.value || "",
        field_surname: CurrentUser?.field_surname?.[0]?.value || "",
        mail: CurrentUser?.mail?.[0]?.value || "",
        field_mobile: CurrentUser?.field_mobile?.[0]?.value || "",
        user_picture: CurrentUser?.user_picture?.[0]?.value || "",

      });
    }
  }, [CurrentUser]);

  const EditUser = () => {
 let passwordToSend = EditData.currentPassword;

  const emailChanged = EditData.mail !== originalMail;

  if (emailChanged && !passwordToSend) {
    const password = window.prompt(
      "For security reasons, please enter your current password to change email:"
    );

    if (!password) return;

    passwordToSend = password; 
  }

  Setloadingedit(true);
    const csrfToken = Userinfo.credentials.csrf_token;
    const credentials = Userinfo.credentials.coded;

    const body = {
      name:[{value: EditData.name}],
      field_name: [{ value: EditData.field_name }],
      field_surname: [{ value: EditData.field_surname }],
      field_mobile: [{ value: EditData.field_mobile }],
      user_picture: [{ value: EditData.user_picture }],
            mail: [{ value: EditData.mail }],

pass: [
    {
     existing: passwordToSend,
      value: EditData.newPassword || ""
    }
  ]
    };



    AuthServices.EditUser(uid, csrfToken, credentials, body)
    
      .then((data) => {
    if (data?.error || data?.status !== 200) {
        setError(data?.message || "Unknown error");
        return; 
      }

      
      if (EditData.newPassword) {
        alert("Password changed successfully. Please login again.");
        logout();
        return;
      }
  if (EditData.name !== originalName) {
    alert("Username changed successfully. Please login again.");
    logout();
    return;
  }
  if (EditData.mail !== originalMail) {
    alert("Email changed successfully. Check your email and login again.");
    logout();
    return;
  }
      
        console.log(data);
        setisediting(false);
        getCuurentUser();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message)
      })
      .finally(() => {
        console.log("Edit Ended");
           Setloadingedit(false)
      });
  };

  return (
    <>
     <header>
       <Navbvar />
     </header>

 <main>

       <Row className="g-0 ">
        <Col lg={12} className="">
          <div className="d-flex  bakcgimg"></div>
        </Col>
      </Row>


      <Container>
        <Row>
          <Col lg={6}>
            <div className="imageprf d-flex gap-3">
              <div className="img-profile">
                  {imageLoading ? (
    <div className="d-flex justify-content-center align-items-center"
         style={{ width: "120px", height: "120px", color:"rgb(157, 64, 244)"}}>
      <Spinner animation="border"  />
    </div>
  ) : (
                <img
                  className="photoapi"
                  src={
                    localUserImage
                      ? `https://tamkeen-dev.com${localStorage.getItem(
                          `user_picture_${uid}`
                        )}`
                      : "/Images/imageNav/user.png"
                  }
                  alt="userprofile"
                />)}
                
                <div className="iconedit d-flex justify-content-between">
                  <MdEdit
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      document.getElementById("uploadImage").click()
                    }
                  />
                  <div className="divider"></div>
                  <FaRegTrashCan
                    disabled={{ user_picture: [] }}
                    className="remove-btn"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (!localUserImage) return;
                      if (
                        window.confirm("Are you sure you want to remove photo?")
                      ) {
                        RemoveImage();
                      }
                    }}
                  />
                </div>
              </div>
              <div className="userdatas">
                <h2 className="mt-5 ">
               
                  {Userinfo?.UserData.current_user.name}
                </h2>
              </div>
            </div>

            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="uploadImage"
              onChange={Userimage}
            />
          </Col> 
                {loading ? (
  <div className="spinnerA spinnedre" style={{ textAlign: 'center', marginTop: '50px' }}>
    <Spinner
      animation="border"
      role="status"
      style={{ color: "rgb(157, 64, 244)", width: "3rem", height: "3rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
) : (

<>
          <Col lg={8} className="offset-lg-2">
            <div className="detailms">
              <h2 style={{ color: "gray" }}>Personal detail</h2>
              <div className="borders border-custom"></div>
            </div>

            <Row>
              <Col lg={6}>
                <div className="firstname w-100 mt-3">
                  <label htmlFor="" style={{ color: "gray" }}>
                    User Name
                  </label>

                      { !isediting?(
                  <strong
                    style={{ fontSize: "19px" }}
                    className="d-block mt-1 strong-border"
                  >
                    {CurrentUser?.name?.[0]?.value}
                  </strong>):(
 <input
                      type="text"
                      className="form-control  mt-1"
                      value={EditData.name}
                      onChange={(e) =>
                        setEditData({ ...EditData, name: e.target.value })
                      }
                    />
                  )}
                  
                </div>
              </Col>
              <Col lg={6}>
                <div className="firstname w-100 mt-3">
                  <label htmlFor="" style={{ color: "gray" }}>
                    First Name
                  </label>
                  {!isediting ? (
                    <strong
                      style={{ fontSize: "19px" }}
                      className="d-block mt-1 strong-border "
                    >
                      {CurrentUser?.field_name?.[0]?.value}
                    </strong>
                  ) : (
                    <input
                      type="text"
                      className="form-control  mt-1"
                      value={EditData.field_name}
                      onChange={(e) =>
                        setEditData({ ...EditData, field_name: e.target.value })
                      }
                    />
                  )}
                </div>
              </Col>
              <Col lg={6}>
                <div className="surname mt-2">
                  <label htmlFor="" style={{ color: "gray" }}>
                    SurName
                  </label>
                  {!isediting ? (
                    <strong
                      style={{ fontSize: "19px" }}
                      className="d-block mt-1 strong-border "
                    >
                      {CurrentUser?.field_surname?.[0]?.value}
                    </strong>
                  ) : (
                    <input
                      type="text"
                      className="form-control mt-1"
                      value={EditData.field_surname}
                      onChange={(e) =>
                        setEditData({
                          ...EditData,
                          field_surname: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
              </Col>
              <Col lg={6}>
                  <div className="surname mt-2">
                  <label htmlFor="" style={{ color: "gray" }}>
                    SurName
                  </label>
                  {!isediting ? (
                    <strong
                      style={{ fontSize: "19px" }}
                      className="d-block mt-1 strong-border "
                    >
                      {CurrentUser?.mail?.[0]?.value}
                    </strong>
                  ) : (
                    <input
                      type="text"
                      className="form-control mt-1"
                      value={EditData.mail}
                      onChange={(e) =>
                        setEditData({
                          ...EditData,
                          mail: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
              </Col>
              <Col lg={6}>
                <div className="username mt-2">
                  <label htmlFor="" style={{ color: "gray" }}>
                    Mobile
                  </label>
                  {!isediting ? (
                    <strong
                      style={{ fontSize: "19px" }}
                      className="d-block mt-1 strong-border "
                    >
                      {CurrentUser?.field_mobile?.[0]?.value}{" "}
                    </strong>
                  ) : (
                    <input
                      type="string"
                      className="form-control"
                      value={EditData.field_mobile}
                      onChange={(e) =>
                        setEditData({
                          ...EditData,
                          field_mobile: e.target.value,
                        })
                      }
                    />  
                  )}
                      </div>
                      </Col>
                  {!isediting? (
<Col lg={6} >
<div className="username mt-2">
         <label htmlFor="" style={{ color: "gray" }}>
                    password
                  </label>
  
       <strong
                      style={{ fontSize: "19px" }}
                      className="d-block mt-1 strong-border "
                      t
                    >
                      *********
                    </strong>
               </div>  </Col>  )  :(
             
                    <>
                    
                       <Col lg={12}>
                       <Row>
<Col lg={6}>
                     
        <label className="mt-3" htmlFor="" style={{ color: "gray" }}>
                    Edit Password
                  </label>

                       <input
    className="form-control mt-2"
      type="password"
      placeholder="Current Password"
      value={EditData.currentPassword || ""}
      onChange={(e) =>
        setEditData({ ...EditData, currentPassword: e.target.value })
      }
     
    />
     </Col>
     <Col lg={6}>
     <div className="username mt-2">
    <input
    className="form-control mt-5"
      type="password"
      placeholder="New Password"
      value={EditData.newPassword || ""}
      onChange={(e) =>
        setEditData({ ...EditData, newPassword: e.target.value })
      }
      
        
    />
    </div>
    </Col>
    </Row>
     </Col>
  </>
                  )
                  }


  { (Error) ?
<div className='alert alert-warning mt-4 ms-2 warCC'>{(Error)}</div>:''
}             
            </Row>
          </Col>
          <Col lg={8} className="offset-lg-2">
            <div className="d-flex mt-3 align-items-center justify-content-between">
              <button
                className="btn btn-edit mt-3"
                onClick={() => setisediting(!isediting)}
              >
                {isediting ? "Cancel Edit" : " Edit"}
              </button>
              <button
                disabled={!isediting||loadingedit}
                onClick={EditUser}
                className="btn btn-submit mt-3"
              >
                {!loadingedit?
                "Save":
                "...Saving"
                }
                
              </button>
            </div>
          </Col> </>)}
        </Row>
      </Container>
 </main>
    </>
  );
};

export default MyProfile;
