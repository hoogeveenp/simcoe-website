"use client";

import Image from "next/image";
import lakesimcoe from "@/public/images/lake_simcoe.jpg";

export function PainCycle() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Image src={lakesimcoe} alt="Pain Cycle" width={350} height={250}></Image>
      <Image src={lakesimcoe} alt="Pain Cycle" width={350} height={250}></Image>
    </div>
  );
}
