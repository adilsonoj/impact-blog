"use client"
import Image from "next/image";
import logo from "../../public/logo.png";
import { Search } from "lucide-react";
import { ThemeToggle } from "./theme/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathName = usePathname()

  return (
    <header className="w-full col-span-12 py-8">
      <div className="max-w-[1218px] flex justify-between items-center mx-auto w-full">
        <div>
          {/* <Image src={logo} alt="logo" width={158} height={36} /> */}
          <h1 className="text-4xl font-bold">BLOGDOMANO</h1>
        </div>
        <div>
          <ul className="flex gap-4">
            <li><Link href={"/"}  className={`${pathName === "/" ? "text-purple-600" : "text-black"} hover:text-purple-600 font-bold dark:text-white`}>Home</Link> </li>
            <li><Link href={"/post"} className={`${pathName === "/post" ? "text-purple-600" : "text-black"} hover:text-purple-600 font-bold dark:text-white`}>Post</Link> </li>
            <li><Link href={"/contact"} className={`${pathName === "/contact" ? "text-purple-600" : "text-black"} hover:text-purple-600 font-bold dark:text-white`}>Contato</Link> </li>
       
          </ul>
        </div>
        <div className="flex gap-8">
          <div className="bg-zinc-100 dark:bg-transparent dark:border-[1px] flex items-center rounded-lg px-2 py-1 ">
            <input type="text " className="bg-transparent focus:outline-none" placeholder="pesquise" />
            <Search size={20} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
