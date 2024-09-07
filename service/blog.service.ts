import {gql, request} from "graphql-request";
import {IArchivedBlogs, IBlog} from "@/types";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs(where: {archive: false}) {
        title
        createdAt
        author {
          name
        image {
          url
        }
        }
        category {
          name
        }
        description
        tag {
          name
          slug
        }
        image {
          url
        }
        content{
          html
        }
        slug
      }
    }
  `
  const {blogs} = await request<{blogs:IBlog[] }>(graphqlAPI, query);
  return blogs;
}

export const getDetailedBlog = async (slug:string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: {slug: $slug}) {
        author {
        name
        image {
          url
        }
        bio
        id
      }
        content {
          html
      }
      createdAt
      image {
        url
      }
      slug
      tag {
        name
        slug
      }
      category {
        name
        slug
      }
      title
      
    }
  }
  `
  const {blog} = await request<{blog:IBlog}>(graphqlAPI, query, {slug});
  return blog;
}

export const getSearchBlogs = async (title:string) => {
  const query = gql`
    query MyQuery($title: String!) {
      blogs(where: {title_contains: $title}) {
        title
        image{
          url
        }
        slug
        createdAt
      }
    }
  `
  const {blogs} = await request<{blogs:IBlog[]}>(graphqlAPI, query, {
    title
  });
  return blogs;
}


export const getArchiveBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs(where: {archive: true}) {
        title
        createdAt
        slug
      }
    }
  `

  const {blogs} =  await request<{ blogs: IBlog[] }>(graphqlAPI, query)
  const filteredBlogs  = blogs.reduce((acc:{[year:string]:IArchivedBlogs}, blog:IBlog) => {
    const year = blog.createdAt.substring(0, 4)
    if (!acc[year]){
      acc[year] = {year, blogs:[]}
    }
    acc[year].blogs.push(blog)
    return acc
  }, {})
  return Object.values(filteredBlogs)
}