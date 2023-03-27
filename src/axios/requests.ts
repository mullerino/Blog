import axios from 'axios'
import { IPost } from '../@types/post'
import { IUser } from '../@types/users'
import { IComment } from '../@types/comment';

interface IFetchData{
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
    setCurrentPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
    setCurrentUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export const fetchPostAndUsers = ({setPosts, setUsers, setCurrentPosts, setCurrentUsers} : IFetchData)=>{
    axios.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users")
      ]).then(axios.spread((postsResponse, usersResponse) => {
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
        setCurrentPosts(postsResponse.data);
        setCurrentUsers(usersResponse.data);
      })).catch((error) => {
        console.log(error);
      });
}

export const fetchCommentsOfPost = (id:number, setComments:  React.Dispatch<React.SetStateAction<IComment[]>>)=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response)=>{
        setComments(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}