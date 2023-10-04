import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

 const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try{
      let data
      if (isLogin) {
        data = await login(email, password);
        console.log(data);
      } else {
        data = await registration(email,password);
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    }catch(e){
      alert(e.response.data.message)
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <FormControl 
          className="mt-3" 
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
           />
          <FormControl 
          className="mt-3" 
          placeholder="Enter password" 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-between mt-3 ps-3 pe-3">
            {isLogin ? (
              <div>
                Don't have account?
                <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Account exists.
                <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={click}>
              {isLogin ? "Enter" : "Registration"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
})

export default Auth;
