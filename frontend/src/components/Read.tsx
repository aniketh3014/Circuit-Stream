import { Blog } from "../../atoms/blogsatom"

export const Read = ({blog}:{blog: Blog}) => {
    return <div className="grid grid-cols-12 w-full px-4 gap-2">
        <div className="col-span-8 bg-red-200">
            <div className="text-3xl font-extrabold">
                {blog.title}
            </div>
            <div>
                posted on Feb 19, 2024
            </div>
            <div>
                {blog.content}
            </div>            
        </div>
        <div className="col-span-4 bg-green-200">
            this is user
        </div>

    </div>
}