import AuthForm from './components/authForm'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import decodeToken from '../utils/decode-token';





interface User {
  credentials: object;
  token: string;
}
const accountExists: string[] = ["Don't have an account?", "Sign-up instead!"]

const SignIn = () => {
  const router = useRouter();
  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: {value: string};
      password: {value: string };
     }
     const email = target.email.value;
     const password = target.password.value;

     const account = { email, password }
     axios.post('/api/sign-in', account)
          .then(res => {
            const { token } = res.data;
            console.log(res.data);
            window.sessionStorage.setItem('user-jwt-login', token);
            router.push('/');
          })
          .catch((err: any) => console.error(err))
   };
  return (
     <AuthForm page="/signUp" auth={signIn} accountExists={accountExists} value="Sign-in"/>
  )
}

export default SignIn;
