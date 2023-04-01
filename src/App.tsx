import { useEffect, useState } from 'react'
import { Routes, Route, Outlet, RouterProvider, BrowserRouter} from 'react-router-dom'

import Posts from "./pages/posts"
import Users from './pages/users'
import DetailsPost from './pages/detailsPost'
import DetailsUser from './pages/detailsUser'

import { IPost } from './@types/post'
import { IComment } from './@types/comment'
import { IUser } from './@types/users'
import { IQuantityItems } from './@types/clicks'
import { fetchCommentsOfPost } from './axios/requests'
import { PostProvider } from './context/postContext'
import { RoutesApp } from './routes'


function App() {
  const [filterCards, setFilterCards] = useState<string>('')
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([])
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([])

  const [quantityItems, setQuantityItems] = useState<IQuantityItems>({itemsPerSection: 6, clicks:1})

  //const currentLocation = useLocation() 

  /*useEffect(()=>{
    fetchPostAndUsers({setPosts, setUsers, setCurrentPosts, setCurrentUsers})
  },[])*/

  /*useEffect(()=>{
    if(currentLocation.pathname === '/'){
      const newPosts = posts.filter((post)=> post.title.startsWith(filterCards))
      setCurrentPosts(newPosts)
    }
    else {
      const filtedUsers = users.filter((user)=> user.name.startsWith(filterCards))
      setCurrentUsers(filtedUsers)
    }
  }, [filterCards])*/

  const fetchComments = (id:number)=>{
    fetchCommentsOfPost(id, setComments)
  }

  const handleQuantityClicks = ()=>{
    setQuantityItems({
      itemsPerSection: 6,
      clicks: quantityItems.clicks+1
    })
  }

  return (
    <div>
      <BrowserRouter>
        <PostProvider>
            <RoutesApp/>
        </PostProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
