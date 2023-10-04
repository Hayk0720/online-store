import { BrowserRouter, Route , Routes , Re } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar"; 
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
const  App =(() => {
  const {user} = useContext(Context)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    },[])
  
  if(loading){
    return<Spinner animation={"grow"}/>
  }
  return (
    <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
  );
})

export default App;
