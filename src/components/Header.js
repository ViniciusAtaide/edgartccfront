import React from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Header {

  static propTypes = {
    onlyBrand: React.PropTypes.bool
  };

  render() {
    let { onlyBrand } = this.props;

    let center = {
      margin: '0 auto',
      float: 'none',
      textAlign: 'center',
      display: 'block'
    };

    return (
      <Navbar eventKey={0} inverse brand={<Link style={onlyBrand ? center : {}} to="/">EdgarTcc</Link>}>
        {!onlyBrand ?
          <Nav>
            <NavItem eventKey={1}><Link to="/alunos">Alunos</Link></NavItem>
            <NavItem eventKey={2}><Link to="/professores">Professores</Link></NavItem>
            <NavItem eventKey={3} onClick={ () => this.props.logout() }>Logout</NavItem>
          </Nav>
        :
          <div></div>
        }
      </Navbar>
    );
  }
}