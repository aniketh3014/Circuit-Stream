import { useRecoilValueLoadable } from "recoil"
import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { Blog } from "../../atoms/blogsatom"
import { BlogsSkeleton } from "../components/BlogsSkeleton"
import { searchSelector } from "../../atoms/searchSelector"

export const Blogs = () => {
   const blogs = useRecoilValueLoadable(searchSelector(''))
   if(blogs.state === 'loading') {
      return <div>
         <div>
            <Appbar />
         </div>
         <div className="flex justify-center pt-24">
         <div className="flex flex-col justify-center">
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
         </div>
      </div>
      </div>
      
   }
   const blog = blogs.contents
 return <div>
   <div className="bg-gray-50 min-h-screen">
   <div className="bg-white">
      <Appbar />
   </div>
   <div className="flex justify-center pt-4">
     <div>
      {blog.map((blog: Blog)  => 
         <Blogcard key={blog.id} username={blog.author.username} title={blog.title} content={blog.content} id={blog.id} publishDate="15 Feb 2004" />
      )}
     </div>
   </div> 
   </div>
 </div>
 
  
}