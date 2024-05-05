import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-current py-4 content-end">
      <nav className="container mx-auto">
        <ul className="flex justify-between items-center text-2xl text-lime-200">
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
    </footer>
  );
};

export default Footer;
