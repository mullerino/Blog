import {Link} from 'react-router-dom'

import { IPost } from "../../@types/post"
import { IUser } from '../../@types/users'

import styles from "./index.module.scss"


interface IPostCard extends IPost{
    userName: (id: number) => string[];
}

const PostCard = ({ id, title, userName , userId} : IPostCard)=>{
    
    return (
        <main className={styles.container}>
            <div className={styles.imgPost}>
                <img src="/imgs/postImg.png" alt="Imagem do post" />
            </div>
            <div className={styles.contentPost}>
                <div className={styles.tagUser}>
                    <span>{userName(userId)}</span>
                </div>
                <div className={styles.titlePost}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.detailsPost}>
                    <Link to={`/post/${id}`} className={styles.link}><span>Leia agora</span></Link>
                </div>
            </div>
        </main>
    )
}

export default PostCard