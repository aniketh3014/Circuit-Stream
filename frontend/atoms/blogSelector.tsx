import { selectorFamily } from "recoil";
import { blogAtom } from "./blogsatom";
import { Blog } from "./blogsatom";

export const blogSelector = selectorFamily<Blog | undefined, string>({
    key: 'blogSelector',
    get: (id) => ({get}) => {
        const blogs = get(blogAtom(id));
        return blogs.find(blog => blog.id === id);
    }
});