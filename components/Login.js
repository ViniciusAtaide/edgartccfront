import React, { Component } from "react";
import { Input, ButtonInput, Button, Grid, Col, Row } from "react-bootstrap";
import { Link } from "react-router";

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  _login(e) {
    e.preventDefault();
    let { loginState } = this.props;
    let login = this.refs.login.getInputDOMNode().value
      , pass = this.refs.senha.getInputDOMNode().value;

    loginState.subscribe
      ? this.props.subscribe({login, pass, })
      : this.props.loginAction(login, pass);
  }


  render() {

    const { loginState, toggleLogin } = this.props;

    let loginForm = {
      background: "rgba(255,255,255,.8)",
      borderRadius: "10px"
    }
      , vtop = {
      marginTop: 150
    }, cadLog = loginState.subscribe ? "Cadastro" : "Login";

    return (
      <Grid style={vtop}>
        <Row>
          <Col style={loginForm} sm={6} smOffset={3}>
            <Row>
              <h2 style={{textAlign: "center"}}>Sistema Escolar</h2>
            </Row>
            <Row>
              <form onSubmit={ this._login.bind(this) }>
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <Input label={ cadLog } ref="login" type="text"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <Input label="Senha" ref="senha" type="password"/>
                  </Col>
                </Row>
                { loginState.subscribe ? (
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <Input label="Repetir a senha" ref="repetesenha" type="password"/>
                  </Col>
                </Row>) : ""}
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <ButtonInput style={{ display: "block", float: "left"}} type="submit" value={ cadLog } bsStyle={loginState.subscribe ? "danger" : "primary"}/>
                    <Button style={{ marginTop: -15, display: "block", float: "right"}} bsStyle="default" onClick={ toggleLogin }>{loginState.subscribe ? "Login" : "Cadastro"} </Button>
                  </Col>
                </Row>
              </form>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}