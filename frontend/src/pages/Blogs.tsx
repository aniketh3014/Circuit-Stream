import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { useBlogs } from "../hooks"
export const Blogs = () => {
   const {loading, blogs} = useBlogs()
 return <div className="bg-gray-50 min-h-screen">
   <div className="bg-white">
      <Appbar username="aniket"/>
   </div>
   <div className="flex justify-center pt-4">
     <div>
      {blogs.map(blog => 
         <Blogcard username={blog.author.username} title={blog.title} content={blog.content} id={blog.id} publishDate="15 Feb 2004" />
      )}
     </div>
   </div> 
   </div>
  
}