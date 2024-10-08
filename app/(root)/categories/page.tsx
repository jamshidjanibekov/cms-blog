import {Dot, Home} from "lucide-react";
import Link from "next/link";
import {getCategories} from "@/service/category.service";
import CategoriesTags from "@/components/cards/categories-tags";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "CMS",
}

const Page = async () => {
  const categories = await getCategories();
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
        <h2 className='text-center text-4xl font-creteRound mt-2'>
          <span>Categories</span>
        </h2>
        <div className='flex gap-1 items-center mt-4'>
          <Home className='w-4 h-4'/>
          <Link
            href='/public'
            className='opacity-90 hover:underline hover:opacity-100'
          >
            Home
          </Link>
          <Dot/>
          <p className='text-muted-foreground'>Category</p>
        </div>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-3 lg:grid-cols-4 mt-24 '>
        {categories.map((category) => <CategoriesTags  key={category.slug} {...category} type='categories'/>)}
      </div>
    </div>
  );
};

export default Page;