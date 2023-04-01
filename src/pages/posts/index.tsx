import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import PostCard from "../../componentes/postCard"

import { IUser } from "../../@types/users"
import { IPost } from "../../@types/post"
import { IQuantityItems } from "../../@types/clicks"

import styles from './index.module.scss'
import { useContext, useEffect } from "react"
import { PostContext } from "../../context/postContext"
import { fetchPosts, fetchUsers } from "../../axios/requests"


interface IPosts{
    users?: IUser[];
    filterItens?: (arg:string) => void;
    filteredItens?: IPost[];
    valueInput?: string;  
    quantityClicks?: () => void;
    quantityActions?: IQuantityItems;
}

const Posts = ({ filterItens, filteredItens, valueInput, quantityClicks, quantityActions } : IPosts)=>{

    //const lastIndex = quantityActions.itemsPerSection * quantityActions.clicks 
    //const items = filteredItens?.slice(0,lastIndex)

    const { posts, users, setPosts, setUsers } = useContext(PostContext)

    useEffect(()=>{
        fetchPosts(setPosts)
        fetchUsers(setUsers)
    }, [])

    const findIdUserPost = (id: number)=>{
        const user = users.filter((user)=>user.id === id)
        return user.map((userin)=>userin.username)
    }

    return (
        <section className={styles.container}>
            <Menu filterPosts = {filterItens} value = {valueInput} disableInput = {false} placeholderInput = {'Buscar pelo título'}/>
            <div className={styles.posts}>
                {posts.map((post)=>(
                    <PostCard key={post.id} id={post.id} body={post.body} title={post.title} userId={post.userId} userName={findIdUserPost}/>
                ))}
            </div>
            <div className={styles.button}>
                <Button textButton="Carregar mais" onClick = {quantityClicks}/>
            </div> 
        </section>
    )
}

export default Posts