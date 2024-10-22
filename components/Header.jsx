import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image"; 

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image 
                        src="/assets/akb.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="w-20 h-10"
                    />
                </Link>

                <div className="xl:hidden">
                    <MobileNav />
                </div>

                <div className="hidden xl:flex flex-grow justify-center items-center gap-8">
                    <Nav />
                </div>

                <div className="hidden xl:flex">
                    <Link href="/contact">
                        <Button className="relative overflow-hidden">
                            <span className="relative z-10">Hire Me</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 animate-gradient-animate opacity-80"></span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
