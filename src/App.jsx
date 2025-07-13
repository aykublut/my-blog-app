import { useNavigate } from 'react-router-dom'
import './App.css'
import AddBlog from './components/AddBlog'
import BlogBox from './components/BlogBox'
import BlogContent from './components/BlogContent'
import BlogList from './components/BlogList'
import Header from './components/Header'
import NavigateManager from './components/NavigateManager'
import { useEffect, useState } from 'react'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const isReload = performance.navigation.type === 1 || performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      navigate('/blogsPage') // veya başka bir sayfa
    }
  }, [])
  const [lookBlogsOn, setLookBlogsOn] = useState(false)

  return (
    <>

      <Header lookBlogsOn={lookBlogsOn} setLookBlogsOn={setLookBlogsOn} />
      <NavigateManager lookBlogsOn={lookBlogsOn} setLookBlogsOn={setLookBlogsOn} />
    </>
  )
}

export default App
