import { useEffect, useState } from "react"
import { IPost } from "../../@types/post"
import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import PostCard from "../../componentes/postCard"

import styles from './index.module.css'

interface IPosts{
    posts: IPost[];
}

const Posts = ({ posts } : IPosts)=>{
    const [filterPosts, setFilterPosts] = useState<string>('')
    const [currentPosts, setCurrentPosts] = useState<IPost[]>([])

    useEffect(()=>{
        const newPosts = posts.filter((post)=> post.title.startsWith(filterPosts))
        setCurrentPosts(newPosts)
    }, [filterPosts])

    return (
        <section>
            <Menu filterPosts = {setFilterPosts} value = {filterPosts} disableInput = {false}/>
            <div className={styles.posts}>
                {currentPosts.map((post)=>(
                    <PostCard key={post.id} id={post.id} body={post.body} title={post.title}/>
                ))}
            </div>
            <div className={styles.button}>
                <Button/>
            </div>
        </section>
    )
}

export default Posts