import React from 'react'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import BlogBoxAdmin from './BlogBoxAdmin'

function BlogListAdmin() {
    const { blogs } = useSelector((store) => store.blog)
    return (
        <Box width={'100%'} display={'flex'} flexWrap={'wrap'} gap={1} justifyContent={'space-evenly'}>
            {
                blogs.map((blog, key) => (
                    <BlogBoxAdmin key={key} blog={blog} />
                ))
            }


        </Box>
    )
}

export default BlogListAdmin