import {FC} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  value: string;
  className: string;
  accountExists: string[];
  page: string;
}
const AuthButton: FC<Props> = ({ value, className, accountExists, page})=> {
  const router = useRouter();
  return (
    <div className={className}>
      <div>
      <Link href={page}>
        <a>
          <p>
            {accountExists[0]}
          </p>
        </a>
      </Link>
      <Link href={page}>
        <a>
          <p>
            {accountExists[1]}
          </p>
        </a>
      </Link>
      </div>
      {value === 'Sign-in' ? <button onClick={() => {router.push('/home')}} type={"submit"}>
        {value}
      </button>
        : <button onClick={() => {router.push(page)}} type={"submit"}>
          {value}
        </button>
}
    </div>
  )
}

export default AuthButton;
