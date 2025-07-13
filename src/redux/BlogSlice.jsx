import { createSlice } from '@reduxjs/toolkit'
import { kyazi, syazi, soyazi, gyazi, kongosterim, songosterim, soongosterim, gongosterim } from '../storage/yazilar'
export const initialState = {
    blogs: [
        {
            id: 1,
            baslik: "İslam ve Tarikatlar",
            onGosterim: kongosterim,
            gidenResim: "Dini",
            yazi: kyazi
        },
        {
            id: 2,
            baslik: "Siyaset ve Olumsuz Haberler",
            onGosterim: songosterim,
            gidenResim: "Siyasi",
            yazi: syazi
        },
        {
            id: 3,
            baslik: "Yalnızlaşan İnsan ve Toplum",
            onGosterim: soongosterim,
            gidenResim: "Sosyal",
            yazi: soyazi
        },
        {
            id: 4,
            baslik: "Türkiye Sanat Dünyası",
            onGosterim: gongosterim,
            gidenResim: "Gündem",
            yazi: gyazi
        },

    ]

}

export const BlogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        blogFunc: (state, action) => {
            state.blogs = [...state.blogs, action.payload]
            console.log(state.blogs)
        },
        deleteBlog: (state, action) => {
            state.blogs = [...state.blogs.filter((blog) => blog.id !== action.payload)]
        }
    }
})


export const { blogFunc, deleteBlog } = BlogSlice.actions

export default BlogSlice.reducer