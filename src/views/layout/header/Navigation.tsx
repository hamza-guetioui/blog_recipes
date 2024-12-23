import Image from "next/image";
import Link from "next/link";
import React from "react";
import { mainMenu } from "@/data/Menus";


const Navigation = () => {
  return (
    <nav>
        <ul  className="flex justify-end items-center  list-none">
      {mainMenu.map((item) => (
        <li key={item.id} className="px-4 py-2 rounded-md hover:transform hover:scale-105 transition-all duration-300 hover:bg-slate-100">
          <Link href={item.link} className="flex items-center gap-2">
            <Image src={item.icon} width={24} height={24} alt={item.name} />
            <span className="text-lg font-bold">{item.name}</span>
          </Link>
        </li>
      ))}
      </ul>
    </nav>
  );
};

export default Navigation;
