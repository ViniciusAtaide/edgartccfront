import React from 'react';
import { Nav, Navbar, NavItem, CollapsibleNav } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Header {
  render() {
    return (
      <Navbar brand={<Link to="/">EdgarTcc</Link>}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            <NavItem eventKey={1}><Link to="/alunos">Alunos</Link></NavItem>
            <NavItem eventKey={2}><Link to="/alunos">Teste</Link></NavItem>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}