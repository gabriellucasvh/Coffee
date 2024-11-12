import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Menu {
  title: string;
  link: string;
}

const Menus: Menu[] = [
  { title: "Menu", link: "/" },
  { title: "Sobre nós", link: "#sobre" },
  { title: "Produtos", link: "#produtos" },
  { title: "Contato", link: "#contato" },
];

const Navbar = () => {
  return (
    <nav className="flex w-full max-w-[90%] mx-auto fixed top-0 p-4 justify-between items-center h-16 bg-merino-800 text-white z-50 rounded-full md:justify-center lg:justify-between">
      <Link href="/" className="flex-shrink-0">
        <Image src="/logo.svg" alt="logo" width={120} height={120} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
      </Link>
      <ul className="hidden md:flex gap-4 items-center">
        {Menus.map((menu, index) => (
          <li key={index}>
            <Link className="hover:text-merino-200 transition duration-300" href={menu.link}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden md:inline-block bg-white text-merino-800 font-medium px-4 py-2 rounded-full border-2 border-transparent hover:border-merino-900 shadow-md transition duration-300">
        Comprar agora
      </button>
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none hover:text-merino-200">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
