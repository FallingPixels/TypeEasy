import AuthForm from 'components/authForm'
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const accountExists: string[] = ["Don't have an account?", "Sign-up instead!"]

interface Account {
  email: string;
  password: string;
}

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

     const account: Account = { email, password }
     axios.post('/api/sign-in', account)
          .then(res => {
            const { token } = res.data;
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
