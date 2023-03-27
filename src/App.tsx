import { useEffect, useState } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'

import axios from 'axios' 

import Posts from "./pages/posts"
import Users from './pages/users'
import DetailsPost from './pages/detailsPost'
import DetailsUser from './pages/detailsUser'

import { IPost } from './@types/post'
import { IComment } from './@types/comment'
import { IUser } from './@types/users'
import { IQuantityItems } from './@types/clicks'
import { fetchCommentsOfPost, fetchPostAndUsers } from './axios/requests'

function App() {
  const [posts,setPosts] = useState<IPost[]>([])
  const [comments, setComments] = useState<IComment[]>([])
  const [users, setUsers] = useState<IUser[]>([])

  const [filterCards, setFilterCards] = useState<string>('')
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([])
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([])

  const [quantityItems, setQuantityItems] = useState<IQuantityItems>({itemsPerSection: 6, clicks:1})

  const currentLocation = useLocation() 

  useEffect(()=>{
    fetchPostAndUsers({setPosts, setUsers, setCurrentPosts, setCurrentUsers})
  },[])

  useEffect(()=>{
    if(currentLocation.pathname === '/'){
      const newPosts = posts.filter((post)=> post.title.startsWith(filterCards))
      setCurrentPosts(newPosts)
    }
    else {
      const filtedUsers = users.filter((user)=> user.name.startsWith(filterCards))
      setCurrentUsers(filtedUsers)
    }
  }, [filterCards])

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
    <Routes>
      <Route path="/" element = {
      <Posts 
        users = {users} 
        filterItens={setFilterCards} 
        filteredItens={currentPosts} 
        valueInput={filterCards}
        quantityClicks = {handleQuantityClicks}
        quantityActions = {quantityItems}/>
      }/>
      <Route path="/users" element = {
      <Users 
        filterItens={setFilterCards} 
        filteredItens={currentUsers} 
        valueInput={filterCards}/>
      }/>
      {posts.map((post)=>(
        <Route 
        key={post.id} 
        path = {`/post/${post.id}`} 
        element = {
        <DetailsPost 
          body={post.body} 
          title={post.title} 
          id={post.id} 
          getComments={fetchComments} 
          comments = {comments}
        />}
        />
      ))}
      {users.map((user)=>(
        <Route 
        key={user.id}
        path={`/user/${user.id}`} 
        element = {
          <DetailsUser 
            address={user.address} 
            company={user.company}
            email={user.email}
            id={user.id}
            name={user.name}
            phone={user.phone}
            username={user.username}
            website={user.website}
          />
        } 
        />
      ))}
    </Routes>
  )
}

export default App
