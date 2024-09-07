import {Dot, Home} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/cards/author";
import {getAuthors} from "@/service/author.service";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "CMS Blog",
}

const AboutPage = async () => {
  const authors = await getAuthors();
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
        <h2 className='text-center text-4xl font-creteRound'>
          <span>About</span>
        </h2>
        <div className='flex gap-1 items-center mt-4'>
          <Home  className='w-5 h-5'/>
          <Link
            href='/'
            className='opacity-90 hover:underline hover:opacity-100'
          >
            Home
          </Link>
          <Dot/>
          <p className='text-muted-foreground'>About</p>
        </div>
      </div>
      <h1 className='text-center text-4xl font-creteRound'>
        We are the Jamshid, <br/> Team of content writers and designers
      </h1>

      <div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
        <div className='col-span-2 max-md:col-span-4 relative h-80'>
          <Image
            src={'/about/01.jpg'}
            alt='about'
            fill
            className='rounded-md object-cover'
          />
        </div>
        <div className='h-80 self-end relative max-md:col-span-2 max-md:h-72'>
          <Image
            src={'/about/00.jpg'}
            alt='about'
            fill
            className='rounded-md object-cover'
          />
        </div>
        <div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
          <Image
            src={'/about/02.jpg'}
            alt='about'
            fill
            className='rounded-md object-cover'
          />
        </div>
      </div>
      <div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam praesentium voluptatem! Ad, amet animi debitis provident repellendus sunt veritatis! Asperiores atque commodi distinctio facilis fugit in, officia praesentium quaerat quas sed tenetur, veniam veritatis vero. Deleniti ducimus eos, error necessitatibus nobis perferendis porro provident quae quod temporibus tenetur, ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam praesentium voluptatem! Ad, amet animi debitis provident repellendus sunt veritatis! Asperiores atque commodi distinctio facilis fugit in, officia praesentium quaerat quas sed tenetur.
        </p>
        <h2 className='text-center text-4xl font-creteRound my-12'>
          <span>Our writes</span>
        </h2>
        <div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
          {authors.map(author => (
            <AuthorCard key={author.name} {...author} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;