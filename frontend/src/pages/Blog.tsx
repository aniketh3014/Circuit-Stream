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
        return <div className="flex justify-center items-center h-screen">
            <div className="text-2xl">Loading...</div>
        </div>
    }
    const blog = blogs?.contents
    return <div className="bg-gray-100 min-h-screen">
        <div>
            <Appbar />
        </div>
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8 xl:col-span-8">
                    <Read blog={blog}/>
                </div>
                <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                    <AuthorCard blog={blog} />
                </div>
            </div>
        </div>
    </div>
}