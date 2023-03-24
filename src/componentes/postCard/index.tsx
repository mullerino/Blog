import {Link} from 'react-router-dom'

import { IPost } from "../../@types/post"

import styles from "./index.module.css"


const PostCard = ({id, title, body } : IPost)=>{
    return (
        <main className={styles.container}>
            <div className={styles.imgPost}>
                <img src="/imgs/postImg.png" alt="Imagem do post" />
            </div>
            <div className={styles.contentPost}>
                <div className={styles.tagUser}>
                    <span>Bret</span>
                </div>
                <div className={styles.titlePost}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.detailsPost}>
                    <Link to={`/post/${id}`}><a>Leia agora</a></Link>
                </div>
            </div>
        </main>
    )
}

export default PostCard