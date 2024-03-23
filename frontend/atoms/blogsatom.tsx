import { atomFamily,selectorFamily } from 'recoil'
import axios from 'axios'
import { SERVER_URL } from '../src/config.tsx'

export interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "username": string;
    }
}

const jwt = localStorage.getItem('token');
export const blogAtom = atomFamily({
    key: 'blogAtom',
    default: selectorFamily<Blog[], string>({
        key: 'blogSelector',
        get: () => async () => {
            let res = await axios.get(`${SERVER_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            
            })
            return res.data.posts
        }
    })
})

