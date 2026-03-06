  import { createContext,  useEffect, useState } from "react";


  export const SignInContext = createContext(null);
  export const SignInProvder = ({ children }) => {
    const [Userinfo, setUserinfo] = useState(null);
    const [Insilaized, SetInsilaized] = useState(true);
  const [localUserImage, setLocalUserImage] = useState(null);

    useEffect(() => {


      const savedUser = localStorage.getItem("UserData");
      if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUserinfo(parsedUser);

      
      const uid = parsedUser?.UserData?.current_user?.uid;
      
      const userImg = localStorage.getItem(`user_picture_${uid}`);
      if (userImg) setLocalUserImage(userImg);
        setUserinfo(JSON.parse(savedUser));
        SetInsilaized(false);




      } else {
        SetInsilaized(false);
      }
    }, []);
      const logout = () => {
      const confirmLogout = window.confirm("Are you sure you want to Log Out?");
      if (confirmLogout) {
        localStorage.removeItem("UserData");
        setUserinfo(null);
      }
    };
    
    return (
    <SignInContext.Provider value={{Userinfo,setUserinfo,Insilaized,SetInsilaized,logout,localUserImage, setLocalUserImage}}>
    { children }
    </SignInContext.Provider>
      
    )
  }
