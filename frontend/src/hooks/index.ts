import { useEffect, useState } from "react"
import axios from 'axios'
import { SERVER_URL } from "../config"

interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "username": string;
    }
}

export const useBlog = ({id} : {id: string}) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    const jwt = localStorage.getItem("token")
    useEffect(() => {
        axios.get(`${SERVER_URL}/api/v1/blog/get/${id}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        .then(res => {
            setLoading(false)
            setBlog(res.data.posts)
        })
    }, [])
    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    const jwt = localStorage.getItem("token")
    useEffect(() => {
        axios.get(`${SERVER_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        .then(res => {
            setLoading(false)
            setBlogs(res.data.posts)
        })
    }, [])
    return {
        loading,
        blogs
    }
}