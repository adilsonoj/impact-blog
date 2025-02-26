"use client"
import { Search } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from "./ui/theme/theme-toggle";

const Header = () => {
    const pathname = usePathname();

    return ( 
        <header className="w-full col-span-12 py-8">
            <div className="max-w-[1218px] flex justify-between items-center mx-auto">
                <h1 className="text-2xl font-bold"><Link href="/">Logo</Link></h1>
                <div>
                    <ul className="flex gap-4">
                        <li>
                            <Link href="/" className={pathname === '/' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}>Home</Link>
                        </li>
                        <li>
                            <Link href="/post" className={pathname === '/post' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}>Post</Link>
                        </li>
                        <li>
                            <Link href="/contato" className={pathname === '/contato' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}>Contato</Link>
                        </li>
                        <li>
                            <Link href="/sobre" className={pathname === '/sobre' ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}>Sobre Nós</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="bg-zinc-100 flex items-center rounded-lg px-2 py-1">
                        <input type="text" className="bg-transparent focus:outline-none" />
                        <Search size={20} />
                    </div>
                </div>
                <div>
                   <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;