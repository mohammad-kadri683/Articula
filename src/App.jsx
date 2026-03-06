
import { Route, Routes } from 'react-router'
import './App.css'



import HomePage from './Pages/HomePage'
import Vacancies from './Pages/Jobs'
import Contact from './Pages/Contact'
import Articles from './Pages/Articles'
import AboutUs from './Pages/AboutUs'
import SignIn from './Pages/SignIn'
import CreateAcc from './Pages/CreateAcc'
import { SignInProvder } from './Context/SignInContext'
import Error404 from './Pages/Error404'
import MyProfile from './Pages/MyProfile'
import Jobs from './Pages/Jobs'
import MyArticle from './Pages/MyArticle'
import CreatArticle from './CustomComponent/CreatArticle'
import ArticleDetails from './Pages/ArticleDetails'
import FAQ from './Pages/FAQ'
import ArticleDetailEdit from './CustomComponent/ArticleDetailEdit'
import Dashb from './CustomComponent/Dashb'

function App() {
  

  return (
    <>
    <SignInProvder>

   
<Routes>
<Route path='/' element={<HomePage/>}/> 
<Route path='Jobs' element={<Jobs/>}/> 
<Route path='Contact' element={<Contact/>}/>
<Route path='Articles' element={<Articles/>}/>
<Route path='About Us' element={<AboutUs/>}/>
<Route path='SignIn' element={<SignIn/>}/>
<Route path='CreateAcc' element={<CreateAcc/>}/>
<Route path='FaQ' element={<FAQ/>}/>
<Route path='MyProfile' element={<MyProfile/>}/>
<Route path='Dashb' element={<Dashb/>}/>
<Route path='MyArticle' element={<MyArticle/>}/>
<Route path='CArticle' element={<CreatArticle/>}/>
<Route path='ArticleDetailEdit/:uid' element={<ArticleDetailEdit/>}/>
<Route path='ArticleDetails/:uid' element={<ArticleDetails/>}/>
<Route path='*' element={<Error404/>}/>

</Routes>
 </SignInProvder>
    </>
  )
}

export default App
