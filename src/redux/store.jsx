import { configureStore } from '@reduxjs/toolkit'
import BlogReducer from '../redux/BlogSlice'

export default configureStore({
    reducer: {
        blog: BlogReducer
    }
})