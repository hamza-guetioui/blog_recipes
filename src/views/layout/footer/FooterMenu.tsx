import React from "react";
import { footerMenu } from "@/data/Menus";
import Image from "next/image";
import Link from "next/link";

const FooterMenu = () => {
  return (
    <div className="p-2 bg-slate-100">
      <ul className="flex gap-2 py-10 px-12 border-2 border-dashed border-slate-400 ">
        {footerMenu.map((item) => (
          <li key={item.id} className="hover:text-orange-800">
            <Link href={item.link} className="flex items-center gap-2">
              <Image src={item.icon} width={16} height={16} alt={item.name} />
              <span className="font-semibold">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
