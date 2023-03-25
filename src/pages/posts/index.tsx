import { IPost } from "../../@types/post"
import Button from "../../componentes/button"
import Menu from "../../componentes/Menu"
import PostCard from "../../componentes/postCard"

import styles from './index.module.css'

interface IPosts{
    posts: IPost[];
}

const Posts = ({ posts } : IPosts)=>{
    return (
        <section>
            <Menu/>
            <div className={styles.posts}>
                {posts.map((post)=>(
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