import { blogSelector } from "../../atoms/blogSelector";
import { Appbar } from "../components/Appbar";
import { AuthorCard } from "../components/AuthorCard";
import { Read } from "../components/Read";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { ReadSkeleton } from "../components/ReadSkeleton";

export const Blog = () => {
    const { id } = useParams();
    const blogs = id ? useRecoilValueLoadable(blogSelector(id)) : null;

    if (blogs?.state === 'loading') {
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div>
                    <div>
                        <ReadSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    const blog = blogs?.contents;

    return (
        <div className="bg-gray-100 min-h-screen">
            <div>
                <Appbar />
            </div>
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-9 px-8" style={{ maxWidth: '900px' }}>
                        <Read blog={blog} />
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <div className="px-10">
                            <AuthorCard blog={blog} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
