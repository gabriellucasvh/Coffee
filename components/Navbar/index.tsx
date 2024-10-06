import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Menu {
  title: string;
  link: string;
}

const Menus: Menu[] = [
  {
    title: "Menu",
    link: "/",
  },
  {
    title: "Sobre nós",
    link: "#sobre",
  },
  {
    title: "Produtos",
    link: "#produtos",
  },
  {
    title: "Contato",
    link: "#contato",
  },
];

const Navbar = () => {
  return (
    <nav className="flex w-[90%] mx-auto fixed p-4 m-4 justify-between items-center right-0 left-0 h-16 bg-merino-800 z-50 text-white rounded-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      </Link>
      <ul className="flex gap-4 items-center">
        {Menus.map((menu, index) => (
          <li key={index}>
            <Link className="hover:text-merino-200 transition duration-300" href={menu.link}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="bg-white text-merino-800 font-medium px-4 py-2 rounded-full border-2 border-transparent hover:border-2 hover:border-merino-900 shadow-md">
        Comprar agora
      </button>
    </nav>
  );
};

export default Navbar;
