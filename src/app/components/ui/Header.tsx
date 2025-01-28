
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { Search } from "lucide-react";

const Header = () => {
    return ( 
        <header className="w-full col-span-12 py-8">
            <div className=" max-w-[1218px] flex justify-between items-center nx-auto v-full">
                <div>
                <Image src={logo} alt = "" width={158} height={36}/>
                </div>
             <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Post</li>
                    <li>Contato</li>
                    <li>Sobre Nós</li>
                </ul>
             </div>
             <div >
                <div className="big-zinc-100 flex items-center rounded-lg px-2 py-1">
                    <input type="text"className="bg-transparent focus:outline-none"/>
                    <Search size={20} />

                </div>
             </div>
            </div>
        </header>
     );
}
 
export default Header;