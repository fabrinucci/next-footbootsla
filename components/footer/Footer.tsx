import Link from "next/link";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.content}`}>
        <nav className={style.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};
