'use client'
import {IBlog} from "@/types";
import Image from "next/image";
import Link from "next/link";
import {CalendarDays, Clock, Dot, Layers2, Minus, Tag} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {cn, getReadingTime} from "@/lib/utils";
import {format} from 'date-fns'

interface Props extends IBlog{
  isVertical?: boolean;
}

const BlogCard = (blog:Props) => {

  const onTag = (e: MouseEvent) => {
    e.stopPropagation();
  }

  blog.isVertical
  return (
    <div  className={cn(
      'grid gap-4 group  ',
        blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
      )}>

      <Link href={`/blogs/${blog.slug}`}>
        <div className='relative bg-secondary rounded-md'>
          <Image
            width={650}
            height={335}
            src={blog.image.url}
            alt={blog.title}
            className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
          />
        </div>
      </Link>
      <div className='flex flex-col space-y-4'>

        {/*Time info*/}
        <Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <CalendarDays className='w-5 h-5'/>
              <p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
            </div>
            <Minus/>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5'/>
              <p>{getReadingTime(blog.content.html)} min read</p>
            </div>
          </div>

        {/*Title*/}
          <h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
            {blog.title}
          </h2>
          <p className='text-muted-foreground line-clamp-3'>{blog.description}</p>
        </Link>

        {/*Author*/}
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Image
              src={blog.author.image.url}
              alt={'author'}
              width={33}
              height={33}
              className='object-cover rounded-sm'
            />
            <p>by {blog.author.name}</p>
          </div>
          <Dot/>
          <div className='flex items-center gap-2'>
            <Link href={`/tags/${blog.tag.slug}`} >
              <Badge variant='secondary' >
                <Tag className='h-3 w-3 mr-2'/>
                {blog.tag.name}
              </Badge>
            </Link>
            <Link href={`/categories/${blog.category.slug}`}>
              <Badge variant='outline'>
                <Layers2 className='h-3 w-3 mr-2'/>
                {blog.category.name}
              </Badge>
            </Link>
          </div>
          </div>
        </div>
      </div>
      );
      };

      export default BlogCard;