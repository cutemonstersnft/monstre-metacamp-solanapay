import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <Image src="/monstrelogo.png" alt="Logo" width={30} height={32} />
    </a>
  </Link>
);

export default Logo;
