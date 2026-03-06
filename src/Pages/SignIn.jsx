import React, { useContext, useEffect } from 'react'
import Navbvar from '../Navbar/Navbvar'
import '../Css/Sign&Resgister.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap'
import { useState } from 'react';
import { AuthServices } from '../ApiServices/AuthServices';
import { BsEyeSlashFill,BsEyeFill } from "react-icons/bs";
import { SignInContext } from '../Context/SignInContext';
import { useNavigate } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
const SignIn = () => {
  
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState();
const [ShowHide,SetShowHide]=useState("password")

  const [loginData,setloginData]=useState(
    {
    "name": "",
    "pass": ""
}
  )
  const{setLocalUserImage}=useContext(SignInContext)
  const{Userinfo,setUserinfo,Insilaized,SetInsilaized} = useContext (SignInContext)
 const navigate = useNavigate()
  const login=()=>{
    setLoading(true)
    AuthServices.Login(loginData)
         .then((data) => {
        console.log(data);


       localStorage.setItem('UserData',JSON.stringify({
       "UserData": data,
       "credentials":{
        "coded":`basic ${btoa(`${loginData.name}:${loginData.pass}`)}`,
            "csrf_token": data.csrf_token,  
    "token": data.token ,
    

       }

       }))

       setUserinfo({
          "UserData":data,
            "credentials":{
              "username":loginData.name,
             "password":loginData.pass,
        "coded":`basic ${btoa(`${loginData.name}:${loginData.pass}`)}`,
            "csrf_token": data.csrf_token,
    "token": data.token

       }
       
       })
       const uid = data?.current_user?.uid;
const savedImage = localStorage.getItem(`user_picture_${uid}`);
setLocalUserImage(savedImage);

       SetInsilaized(false)
navigate('/')
       
      })
      .catch((err) => {
   
       setError(err.message)
      })
      .finally(() => {
        console.log("Fecth ended");
        setLoading(false)
          
     
      });
  }
   const Username = Userinfo?.UserData?.current_user?.name || [];
useEffect(() => {
  if (!Insilaized&&Userinfo) {  
    navigate("/", { replace: true });
  }
  if (Username.includes("tamkeen"))  navigate('/Dashb');
}, [Userinfo,Insilaized,navigate]);




if (Insilaized){
   return <>
   </>;
}
if (Userinfo?.credentials) {
  return(
     <>
 
 </>
  )

}
  return (
    <>
    <header>
          <Navbvar empty mode='signin'/>
    </header>
  

    <main className='mainSign'>
<Container>
  <Row className='d-flex align-items-center'>
    <Col lg={6} md={12} sm={12} xs={12} data-aos="fade-right" data-aos-delay={200}>
    
<div className="imgRi">
  <img src="/Images/images.page1/Group 1000006183.png" alt="images of an article" />
</div>

    </Col>
    <Col lg={6} md={12} sm={12} xs={12} className='dda' data-aos="fade-left" data-aos-delay={200} >
    <div className="d-flex justify-content-center">
      <h1>Sign in to  Your Account</h1>
    </div>
    <div className="form">

<form onSubmit={(e)=>{
  e.preventDefault()
  login()
}}>
 <label htmlFor="email" className='ms-lg-5'>Email</label>




<div className="emailorser ms-lg-5">
    <input type="text" placeholder='Username or email address...' className='form-control  mt-2' onInput={
  ((e)=>{
    setloginData(
      {
        ...loginData,
        "name": e.target.value

      }
    )
  })
  } />
</div>

   <label htmlFor="email" className='ms-lg-5 mt-3'>Password</label>

<div className="sfg position-relative ms-lg-5 ">
  <input
    type={ShowHide}
    placeholder="password"
    className="form-control w-100 pe-5"
    onInput={(e) =>
      setloginData({ ...loginData, pass: e.target.value })
    }
  />

  <button
    type="button"
    className="eye-btn"
    onClick={() =>
      SetShowHide(ShowHide === "password" ? "text" : "password")
    }
  >
    {ShowHide === "password" ? <BsEyeFill /> : <BsEyeSlashFill />}
  </button>
</div>

  <div className="d-flex justify-content-between align-items-center  mt-4 w-100">


<div className="d-flex align-items-center gap-2 ms-lg-5">
  <input type="checkbox"  className='ms-2'/> Remember me
</div>

<button className='btn btn-movee'
disabled={Loading||loginData.name.length < 4 ||loginData.pass.length < 4 }
>
{
  Loading?
  <i>...Signing In</i>:
  'Sign In'
}
 </button>


  </div>
  { (Error) ?
<div className='alert alert-warning mt-3 ms-5 w-100 '>{(Error)}</div>:''
}
</form>
    <div className="d-flex align-items-center mt-4 ms-lg-5">
  <div className="flex-grow-1 border-top"></div>
  <span className="mx-3 text-muted">Or Sign Up With</span>
  <div className="flex-grow-1 border-top"></div>
</div>
  <div className="d-flex align-items-center justify-content-between ms-lg-5 mt-2">

    
      <a href="#" className='a-gog d-flex gap-2 align-items-center item1'>

        <div className="google">
        
        <img src="..\public\Images\images.page1\search 1.png" alt="google" />
        
        </div>
        <p className='mb-0'>google</p>
      </a>
         <a href="#" className='a-gog d-flex gap-2 align-items-center item1'>

        <div className="google">
        
        <img src="..\public\Images\images.page1\facebook 1.png" alt="google" />
        
        </div>
        <p className='mb-0'>facebook</p>
      </a>
         <a href="#" className='a-gog d-flex gap-2 align-items-center item1'>

        <div className="google">
        
        <img src="..\public\Images\images.page1\apple 2.png" alt="google" />
        
        </div>
        <p className='mb-0'>Apple</p>
      </a>
    
  
  </div>
    </div>
    
    </Col>
  </Row>
</Container>

    </main>
    <footer></footer>
    </>
  )
}

export default SignIn
