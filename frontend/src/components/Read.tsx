import { Blog } from "../../atoms/blogsatom"
import parse from 'html-react-parser'

export const Read = ({blog}:{blog: Blog}) => {
    return <div className="flex">
        <div>
            <div className="text-5xl font-bold">
                {blog.title}
            </div>
            <div className="text-gray-500 font-light pt-2">
                posted on Feb 19, 2024
            </div>
            <div className="text-gray-800 pt-4">
                {parse(blog.content)}
            </div>            
        </div>
    </div>
}