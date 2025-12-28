import {Route,Routes } from 'react-router-dom'
import Works from './pages/works_page/works_page'
import Blogs from './pages/blogs/blogs'

import BlogPage from './pages/blogs/BlogPage'
import Portfolio from './pages/portfolio/page'



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Portfolio/>}/>
      <Route path='/works' element={<Works/>}/>
      <Route path='/blogs' element ={<Blogs/>}/>
      <Route path='/blogs/:id' element={<BlogPage />} />
    </Routes>
  )
}

export default AppRoutes