import { blogSelector } from "../../atoms/blogSelector"
import { Appbar } from "../components/Appbar"
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
            <Appbar username="Aniket" />
        </div>
        <Read blog={blog}/>
    </div>
}