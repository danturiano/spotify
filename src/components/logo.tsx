import Image from "next/image";
import React from "react";
import logo_white from "/public/logo_white.svg";

export default function Logo() {
  return (
    <>
      <Image src={logo_white} alt="spotify logo" width={36} />
    </>
  );
}
