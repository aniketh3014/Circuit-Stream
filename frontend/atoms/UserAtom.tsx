import { atom, selector } from 'recoil'
import axios from 'axios'
import { SERVER_URL } from '../src/config'

export interface user {
    name: string
}

const jwt = localStorage.getItem('token');
export const userAtom = atom({
    key: 'userAtom',
    default: selector<user>({
        key: 'userSelector',
        get: async () => {
            let res = await axios.get(`${SERVER_URL}/api/v1/blog/username`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            return res.data.name
        }
    })
})