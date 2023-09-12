import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Container, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {observer} from "mobx-react-lite"

const NavBar = observer(() =>{
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
        Buy device
      </NavLink>

        {user.isAuth ?
      <Nav className="ms-auto" style={{color:"white"}}>
        
        <Button variant={"outline-light"} onClick={() => console.log("Light")}>
          Admin panel
        </Button>
        <Button className="ms-4" variant={"outline-light"} onClick={() => console.log("Light")}>
          Log out
        </Button>
      </Nav> :
      <Nav className="ms-auto" style={{color:"white"}}>
        
      <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
        Login
      </Button>
    </Nav> 
        }
                
    </Container>
    </Navbar>
  );
})

export default NavBar;
