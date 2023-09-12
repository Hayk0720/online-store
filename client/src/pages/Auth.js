import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className='m-auto'>{isLogin ? "Login" : "Registration"}</h2>
        <Form className='d-flex flex-column'>
          <FormControl className="mt-3" placeholder="Enter Email" />
          <FormControl className="mt-3" placeholder="Enter password" />
          <div className='d-flex justify-content-between mt-3 ps-3 pe-3' >
            {isLogin ?
            <div>
              Don't have account?
              <NavLink to={REGISTRATION_ROUTE}>
                Register
              </NavLink>
            </div> :
            <div>
            Account exist.  
            <NavLink to={LOGIN_ROUTE}>
              Enter
            </NavLink>
          </div>
            }
            <Button variant={'outline-success'}>{isLogin ? "Enter" : "Registration"}</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
