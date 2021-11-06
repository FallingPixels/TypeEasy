import AuthForm from './components/authForm'
import React, {FC} from 'react';

const authIn = (e: React.SyntheticEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const target = e.target as typeof e.target & {
    email: {value: string};
    password: {value: string };
  }
  const email = target.email.value;
  const password = target.password.value;
  form.reset();
  location.replace('/home');
  return null;
};
const accountExists: string[] = ["Don't have an account?", "Sign-up instead!"]

 const SignIn = () => {
  return (
     <AuthForm authFunction={authIn} accountExists={accountExists}/>
  )
}

export default SignIn;
