import { selectorFamily } from 'recoil'
import { blogAtom } from './blogsatom'
import { SearchStateAtom } from './searchstateAtom';

export const searchSelector = selectorFamily({
    key: 'searchSelector',
   get: () => ({get}) => {
        const blogs = get(blogAtom(''));
        const keyword = get(SearchStateAtom)
        if (!keyword) return blogs;
        return blogs.filter(blog => blog.title.toLowerCase().includes(keyword.toLowerCase()));
   }
})