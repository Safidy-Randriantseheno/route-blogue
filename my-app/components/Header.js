import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/blog/1">
          <a>Blog 1</a>
        </Link>
        <Link href="/blog/2">
          <a>Blog 2</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
