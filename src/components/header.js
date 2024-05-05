import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-300 py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-between items-center text-4xl text-yellow-300 font-bold">
          <li>
            <Image
              className="rounded-full"
              src="/images/whereami.png"
              width={100}
              height={100}
              alt="Where Am I"
            />
          </li>
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
