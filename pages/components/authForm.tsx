import React, { Component } from 'react'
import authPage from '../../styles/AuthPage.module.scss'
import AuthButton from './authButton';
import Welcome from './welcome'
import Image from 'next/image';
import router, { withRouter, NextRouter } from 'next/router';


interface WithRouterProps {
  router: NextRouter;
}

interface AuthState  {
  email: string ;
  password: string ;
}

interface AuthProps extends WithRouterProps {
  signUp(e: React.FocusEvent<HTMLFormElement>): Promise<void>;
  accountExists: string[];
  value: string;
  page: string;
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
    const {signUp, accountExists, page, value} = this.props;
    return (
      <>
    <div className={authPage.main}>
      <div className={authPage.title}>
        <Welcome greetings={greetings} />
      </div>
      <form action="submit" onSubmit={signUp} className={authPage.form}   >
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
