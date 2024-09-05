'use client'
import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {Loader2, Minus, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {popularCategories, popularTags} from "@/constants";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {ChangeEvent, useState} from "react";
import {IBlog} from "@/types";
import {getSearchBlogs} from "@/service/blog.service";
import {debounce} from 'lodash'

const GlobalSearch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [blogs, setBlogs] = useState<IBlog[]>([])

  const handleSearch = async (e:ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase()

    if(text && text.length > 2){
      setIsLoading(true)
      const data = await getSearchBlogs(text)
      setBlogs(data)
      setIsLoading(false)
    }else {
      setBlogs([])
      setIsLoading(false)
    }
  }

  const debounceSearch = debounce(handleSearch, 1000)

  return(
    <Drawer>
      <DrawerTrigger>
        <div className='hover:bg-blue-400/20 transition-all flex  items-center gap-1 cursor-pointer py-2 px-3 rounded-sm'>
          <span className='hidden md:flex'>Search</span>
          <Search className='h-4 w-4'/>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div  className='container max-w-6xl mx-auto py-12'>
          <Input className='bg-secondary ' placeholder='Type to search blogs...' onChange={debounceSearch} disabled={isLoading}/>
          {isLoading && <Loader2 className='animate-spin mt-4 mx-auto' />}
          {blogs.length ? <div className='text-2xl font-creteRound'>{blogs.length} Results found</div> : null}
          <div className='flex flex-col space-y-2 mt-2'>
            <div className='flex items-center gap-2'>
              <p className='font-creteRound text-2xl'>See posts by categories</p>
              <Minus />
              <Link href={'/categories'} >
                <DrawerClose className='text-blue-500 underline hover:opacity-90'>
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className='flex flex-wrap gap-2'>
              {popularCategories.map(item => (
                <Badge variant={'secondary'} key={item.slug}>{item.name}</Badge>
              ))}
            </div>
          </div>

          <div className='flex flex-col space-y-2 mt-2'>
            <div className='flex items-center gap-2'>
              <p className='font-creteRound text-2xl'>See posts by tags</p>
              <Minus />
              <Link href={'/tags'} >
                <DrawerClose className='text-blue-500 underline hover:opacity-90'>
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className='flex flex-wrap gap-2'>
              {popularTags.map(item => (
                <Badge variant={'secondary'} key={item.slug}>{item.name}</Badge>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
};

export default GlobalSearch;