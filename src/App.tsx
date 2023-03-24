import { Routes, Route } from 'react-router-dom'

import axios from 'axios' 

import Posts from "./pages/posts"
import Users from './pages/users'
import DetailsPost from './pages/detailsPost'
import DetailsUser from './pages/detailsUser'

import { IPost } from './@types/post'
import { useEffect, useState } from 'react'

function App() {
  
  const [posts,setPosts] = useState<IPost[]>([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      setPosts(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])


  return (
    <Routes>
      <Route path="/" element = {<Posts posts={posts}/>}/>
      <Route path="/users" element = {<Users/>}/>
      {posts.map((post)=>(
        <Route 
        key={post.id} 
        path = {`/post/${post.id}`} 
        element = {<DetailsPost body={post.body} title={post.title} id={post.id}/>}
        />
      ))}
      <Route path='/user/1' element ={<DetailsUser/>}/>
    </Routes>
  )
}

export default App
