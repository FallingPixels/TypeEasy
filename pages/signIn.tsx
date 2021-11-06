import AuthForm from './components/authForm'
import React, {FC} from 'react';

const signIn = (e: React.SyntheticEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const target = e.target as typeof e.target & {
    email: {value: string};
    password: {value: string };
  }
  const email = target.email.value;
  const password = target.password.value;
   //Insert fetch request here with await keyword be sure to use async up top
  // to avoid data loss when the page switches
  form.reset();
  location.replace('/home');
  return null;
};
const accountExists: string[] = ["Don't have an account?", "Sign-up instead!"]

 const SignIn = () => {
  return (
     <AuthForm page="/signUp" authFunction={signIn} accountExists={accountExists} value="Sign-in"/>
  )
}

export default SignIn;
