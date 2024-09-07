import React from "react";

export interface ChildProps{
  children:React.ReactNode
}

export interface IArchivedBlogs{
  year:string
  blogs:IBlog[]
}

export interface IBlog{
  reduce(arg0: (acc: any, blog: any) => void, arg1: {}): unknown;
  title:string
  description:string
  author:IAuthor
  category:ICategoryAndTags
  tag:ICategoryAndTags
  image:{url:string}
  createdAt:string
  content:{html:string}
  slug:string
}
export interface IAuthor{
  name:string
  image:{ url:string }
  bio:string
  blogs:IBlog[]
  id:string
}
export interface ICategoryAndTags{
  name:string
  slug:string
}