import { Link } from "react-router-dom";
import { Avatar } from "./Avatar"
import { Dot } from "./Dot"

interface inProps {
    username: string;
    title: string;
    content: string;
    publishDate: string;
    id: string
}

export const Blogcard = ({
    username,
    title,
    content,
    publishDate,
    id
}: inProps) => {
    return <Link to={`/blog/${id}`}><div className="w-screen lg:max-w-5xl max-w-xl cursor-pointer bg-white border-b border-gray-200 shadow-md">
    <div className="p-5 px-16">
   <div className="flex">
       <div className="flex flex-col justify-center">
           <Avatar username={username}/>
       </div>
       <div className="font-normal pl-2">{username}</div>
       <div className="pl-1 flex flex-col justify-center"> <Dot /> </div>
       <div className="pl-1 text-sm font-light flex flex-col justify-center text-gray-500">{publishDate}</div>  
   </div>
   <div className="text-2xl font-bold font-ui-sans-serif pt-3">
       {title}
   </div>
   <div className="pt-2 font-serif">
       {content.slice(0, 150) + "..."}
   </div>
   <div className="text-gray-600 text-sm font-light pb-6 pt-7">
       {`${Math.ceil(content.length/100)} min read`}
   </div>
</div>
</div></Link>
}