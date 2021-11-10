import AuthForm from './components/authForm'
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



const accountExists= ["Have an account?", "Sign-in instead!"]
function SignUp(){
  const router = useRouter();
  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    }
    const email = target.email.value;
    const password = target.password.value;
    const account: object = { email, password }
    await fetch('api/sign-up', {
      method: 'POST',
      body: JSON.stringify(account)
    })
      .then(response => response.json())
      .then(data => {
        form.reset();
        router.push('/signIn')
      })
      .catch(err => console.error(err))
  }

  return (
   <AuthForm signUp={signUp} accountExists={accountExists} page="/signIn" value="Sign-up"/>
  )
}

export default SignUp;
