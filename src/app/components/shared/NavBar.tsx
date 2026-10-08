import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-slate-200">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Image src={logo} className="h-15 w-15" alt="Hero App logo"></Image>
        <ul className="flex items-center gap-2">
          <li className="text-1xl text-black hover:text-blue-500"><Link href="/">Home</Link></li>
          <li className="text-1xl text-black hover:text-blue-500"><Link href="/apps">Apps</Link></li>
          <li className="text-1xl text-black hover:text-blue-500"><Link href="/installation">Installation</Link></li>
        </ul>
        <button className="btn btn-success">Contribute</button>
      </nav>
   </div>
  );
};

export default NavBar;
