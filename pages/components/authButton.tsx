import {FC} from 'react';
import Link from 'next/link';
type Props = {
  value: string;
  className: string;
  accountExists: string[];
  page: string;
}
const authButton: FC<Props> = ({value, className, accountExists, page})=> {
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
      <button type={"submit"}>
        {value}
      </button>
    </div>
  )
}

export default authButton;
