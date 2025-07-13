import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function BlogContent() {
    const { id } = useParams();
    const { blogs } = useSelector((store) => store.blog)
    let content;
    blogs.map((blog) => {
        if (blog.id == id) {
            content = blog.yazi
        }
    })

    const yazi = content;
    return (
        <Box p={5}>
            <Typography sx={{ whiteSpace: "pre-line", color: 'rgba(255, 255, 255, 0.8)', fontStyle: 'italic' }}>
                {
                    yazi
                }
            </Typography>
        </Box>
    )
}

export default BlogContent