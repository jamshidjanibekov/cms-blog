import React from 'react';
import {Dot, Home} from "lucide-react";
import Link from "next/link";
import CategoriesTags from "@/components/cards/categories-tags";
import {getTags} from "@/service/tag.service";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "All tags",
}

const Page = async () => {
  const tags = await getTags();
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
        {tags.map((tag) => <CategoriesTags  key={tag.slug} {...tag} type='tags'/>)}
      </div>
    </div>
  );
};

export default Page;