import React, { Component } from 'react'
import authPage from 'styles/AuthPage.module.scss'
import AuthButton from './authButton';
import Welcome from './welcome'
import Image from 'next/image';
import { NextRouter, withRouter } from 'next/router';
import decodeToken from 'utils/decode-token';

interface AuthState  {
  email: string;
  password: string ;
}

interface AuthProps {
  auth(e: React.FocusEvent<HTMLFormElement>): void;
  accountExists: string[];
  value: string;
  page: string;
  router: any;
}

interface WithRouterProps{
  router: NextRouter
}

class AuthForm extends Component<AuthProps, AuthState> {

  constructor(props: AuthProps){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    const { router } = this.props;
    const token = window.sessionStorage.getItem('user-jwt-login');
    let user;
    if(token){
    user = decodeToken(token);
    }
    if(user) {
      router.push('/');
    }
  }
  handleChange(e: React.ChangeEvent <HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    if(name === 'email'){
      this.setState({ email: value });
    } else {
      this.setState({ password: value });
    }
  }

  render() {
    const greetings = ['Welcome', 'Bienvenido', '欢迎', 'ようこそ', 'Bienvenue', 'Herzlich Willkommen', 'Witamy', 'Velkominn', 'Bem-Vinda'];
    const {auth, accountExists, page, value} = this.props;
    return (
      <>
    <div className={authPage.main}>
      <div className={authPage.title}>
        <Welcome greetings={greetings} />
      </div>
      <form action="submit" onSubmit={auth} className={authPage.form}   >
        <Image width={349} height={205} src="/speakEasy.png" alt="Speak Easy Logo"/>
        <input
          id="username"
          className={authPage.login}
          onChange={this.handleChange}
          type="email"
          name="email"
          placeholder="Email"
          required />
        <input
          id="password"
          className={authPage.login}
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="Password"
          required />
        <AuthButton
          value={value}
          page={page}
          accountExists={accountExists}
          className={authPage['login-div']}/>
    </form>
  </div>
   </>
  )
}
}
export default withRouter(AuthForm);
