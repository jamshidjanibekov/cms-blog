import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {navLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const Mobile = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className='flex md:hidden'>
          <Button variant='ghost' size='icon'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <Link href='/'>
            <h1 className='text-4xl font-creteRound' >Jamshid</h1>
          </Link>
          <Separator className='my-3'/>
          <div className='flex flex-col space-y-3'>
            {navLinks.map(nav => (
              <Link
                href={nav.route}
                key={nav.route}
                className={cn(
                  'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
                )}
              >
                <nav.icon className='h-5 w-5'/>
                {nav.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

    </div>
  );
};

export default Mobile;