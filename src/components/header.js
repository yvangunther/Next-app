import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create">Add</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
