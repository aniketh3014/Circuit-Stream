import { blogSelector } from "../../atoms/blogSelector"
import { Appbar } from "../components/Appbar"
import { AuthorCard } from "../components/AuthorCard"
import { Read } from "../components/Read"
import { useParams } from "react-router-dom"
import { useRecoilValueLoadable } from "recoil"

export const Blog = () => {
    const { id } = useParams()

    const blogs = id ? useRecoilValueLoadable(blogSelector(id)) : null
    if (blogs?.state === 'loading') {
        return <div>
            loading....
        </div>
    }
    const blog = blogs?.contents
    return <div>
        <div>
            <Appbar />
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-2 pt-14">
            <div className="col-span-8 lg:pl-60 pl-9">
                <Read blog={blog}/>
            </div>
            <div className="col-span-4 lg:pl-9">
                <AuthorCard blog={blog} />
            </div>
        </div>

    </div>
}