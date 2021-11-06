import {FC} from 'react';
import Link from 'next/link';
type Props = {
  value: string;
  className: string;
  accountExists: string[];
}
const authButton: FC<Props> = ({value, className, accountExists})=> {
  return (
    <div className={className}>
      <div>
      <Link href="/signUp">
        <a>
          <p>
            {accountExists[0]}
          </p>
        </a>
      </Link>
      <Link href="/signUp">
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
