import { Routes, Route } from 'react-router-dom'
import Posts from "./pages/posts"
import Users from './pages/users'

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Posts/>}/>
      <Route path="/users" element = {<Users/>}/>
    </Routes>
  )
}

export default App
