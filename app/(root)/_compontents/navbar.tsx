import Link from "next/link";
import {navLinks} from "@/constants";

const Navbar = () => {
  return (
    <div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
      <div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
        {/*Logo*/}
        <Link href='/'>
          <h1  className='text-4xl font-creteRound'>Janibekov</h1>
        </Link>
        {/*NavLinks*/}
        <div className='gap-4 hidden md:flex'>
          {navLinks.map(nav => (
            <Link
              key={nav.route}
              href={nav.route}
              className='hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors'
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;