import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src="48331.svg" width={350} height={60} alt="logo" />
    </Link>
  );
};

export default Logo;
