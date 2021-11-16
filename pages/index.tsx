import React, {FC, useEffect, useState} from 'react'
import decodeToken from 'utils/decode-token';
import {useRouter} from 'next/router';
import SignIn from './signIn';


const Home: FC = () => {
    const router = useRouter();
    const [homePage, setHomePage] = useState(true)
    const checkUser = () => {
      const token = window.sessionStorage.getItem('user-jwt-login');
      const user = token ? decodeToken(token) : null
      if (!user) {
        setHomePage(false)
        router.push('/signIn');
      }
    }
     useEffect(() => {
      checkUser();
    })
    return (<>
      {homePage &&
      <div>
        <h1>Home Page Baby</h1>
      </div>
      }
      {!homePage &&
      <SignIn/>
      }
      </>
      )

}
export default Home;
