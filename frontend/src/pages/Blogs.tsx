import { useRecoilValueLoadable } from "recoil"
import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { blogAtom } from "../../atoms/blogsatom"
import { Blog } from "../../atoms/blogsatom"

export const Blogs = () => {
   const blogs = useRecoilValueLoadable(blogAtom(""))
   if(blogs.state === 'loading') {
      return <div>
         loading
      </div>
   }
   const blog = blogs.contents
 return <div className="bg-gray-50 min-h-screen">
   <div className="bg-white">
      <Appbar username="aniket"/>
   </div>
   <div className="flex justify-center pt-4">
     <div>
      {blog.map((blog: Blog)  => 
         <Blogcard username={blog.author.username} title={blog.title} content={blog.content} id={blog.id} publishDate="15 Feb 2004" />
      )}
     </div>
   </div> 
   </div>
  
}