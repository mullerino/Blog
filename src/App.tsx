import { Routes, Route, useLocation } from 'react-router-dom'

import axios from 'axios' 

import Posts from "./pages/posts"
import Users from './pages/users'
import DetailsPost from './pages/detailsPost'
import DetailsUser from './pages/detailsUser'

import { IPost } from './@types/post'
import { useEffect, useState } from 'react'
import { IComment } from './@types/comment'
import { IUser } from './@types/users'

function App() {
  const [posts,setPosts] = useState<IPost[]>([])
  const [comments, setComments] = useState<IComment[]>([])
  const [users, setUsers] = useState<IUser[]>([])

  const [filterCards, setFilterCards] = useState<string>('')
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([])
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([])

  const currentLocation = useLocation()  
  
  useEffect(()=>{
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users")
    ]).then(axios.spread((postsResponse, usersResponse) => {
      setPosts(postsResponse.data);
      setCurrentPosts(postsResponse.data);
      setCurrentUsers(usersResponse.data);
      setUsers(usersResponse.data);
    })).catch((error) => {
      console.log(error);
    });
  }, [])

  const getCommentsOfPost = (id:number)=>{
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response)=>{
          setComments(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
  }, [])
  }

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

  return (
    <Routes>
      <Route path="/" element = {
      <Posts 
        users = {users} 
        filterItens={setFilterCards} 
        FilteredItens={currentPosts} 
        valueInput={filterCards}/>
      }/>
      <Route path="/users" element = {
      <Users 
        filterItens={setFilterCards} 
        FilteredItens={currentUsers} 
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
          getComments={getCommentsOfPost} 
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
