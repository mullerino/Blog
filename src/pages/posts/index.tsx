import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import PostCard from "../../componentes/postCard"

import styles from './index.module.css'

const Posts = ()=>{
    return (
        <section>
            <Menu/>
            <div className={styles.posts}>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
            <div className={styles.button}>
                <Button/>
            </div>
        </section>
    )
}

export default Posts