import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image"; // Import the Image component

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <Image 
                        src="/assets/akb.png" // Path to your image
                        alt="Logo" // Alt text for accessibility
                        width={500} // Set the desired width
                        height={500} // Set the desired height
                        className="w-20 h-10" // Additional classes for styling
                    />
                </Link>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

                {/* desktop nav */}
                <div className="hidden xl:flex flex-grow justify-center items-center gap-8">
                    <Nav />
                </div>

                {/* hire me button */}
                <div className="hidden xl:flex">
                    <Link href="/contact">
                        <Button>
                            Hire Me
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
