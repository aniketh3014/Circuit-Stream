import { Blog } from "../../atoms/blogsatom"
import { Avatar } from "./Avatar"

export const AuthorCard = ({blog}: {blog:Blog}) => {
    return <div>
        <div className="font-semibold pb-4">
            Author
        </div>
        <div className="font-bold text-2xl flex">
        <div className="pr-3 font-normal">
            <Avatar username={blog.author.username} />
        </div>
            {blog.author.username}
        </div>
        <div className="pt-2 text-slate-500">
            Here is some info about the author
        </div>
    </div>
}