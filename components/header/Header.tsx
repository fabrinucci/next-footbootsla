import Link from "next/link";

import style from './Header.module.css';
import Image from "next/image";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.bar}>
          <Link href='/'>
            <Image src='/images/logo.png' height={100} width={250} alt='Logo'/>
          </Link>
          <nav className={style.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
