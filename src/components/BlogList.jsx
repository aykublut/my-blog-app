import React from 'react'
import BlogBox from './BlogBox'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import Typography from '@mui/material/Typography'

function BlogList() {
    const { blogs } = useSelector((store) => store.blog)
    return (
        <Box width={'100%'} display={'flex'} flexDirection={'column'} flexWrap={'wrap'} gap={1} justifyContent={'space-evenly'}>
            <Box display={'flex'} flexWrap={'wrap'} gap={1} justifyContent={'space-evenly'}>
                {
                    blogs.map((blog, key) => (
                        <BlogBox key={key} blog={blog} />
                    ))
                }
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'4rem'} sx={{ marginTop: '10rem', backgroundColor: 'rgba(23, 23, 23, 0.56)', fontStyle: 'italic' }}><Typography sx={{ color: 'white', fontSize: '1.2rem' }}>Bu blog yazılarının hepsi yapay zeka tarafından yazılmıştır - <span> <a href="https://github.com/aykublut" target='_blank'>Github için tıkla</a></span></Typography></Box>
        </Box>
    )
}

export default BlogList