import {FC, useEffect} from 'react'
import decodeToken from '../utils/decode-token';
import {useRouter} from 'next/router';

const Home: FC = () => {
    const router = useRouter();
    useEffect(() => {
      const token = window.sessionStorage.getItem('user-jwt-login');
      const user = token ? decodeToken(token) : null;
      if(!user){
        router.push('/signIn');
      }
    })
    return (
      <div>
        <h1>Home Page Baby</h1>
      </div>
      )

}
export default Home;
