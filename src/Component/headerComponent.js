import Recat, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar dark olor="danger">
          <NavbarBrand>
            <h2>Nirav</h2>
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Aboutus</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
