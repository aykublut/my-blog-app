import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './AddBlog'
import BlogList from './BlogList'
import BlogContent from './BlogContent'
import BlogBoxAdmin from './BlogBoxAdmin'
import BlogListAdmin from './BlogListAdmin'

function NavigateManager({ lookBlogsOn, setLookBlogsOn }) {
    return (
        <Routes>
            <Route path='/' element={<BlogList />} />
            <Route path='/adminPanel' element={<AddBlog lookBlogsOn={lookBlogsOn} setLookBlogsOn={setLookBlogsOn} />} />
            <Route path='/blogsPage' element={<BlogList />} />
            <Route path='/blogContent/:id' element={<BlogContent />} />
            <Route path='/blogsAdmin' element={<BlogListAdmin />} />
        </Routes>
    )
}

export default NavigateManager