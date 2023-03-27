import { IComment } from '../../@types/comment'

import styles from './index.module.scss'

const Comment = ({email, body} : IComment)=>{
    return (
        <div className={styles.container}>
            <div className={styles.userPhoto}>
                <img src="/imgs/user.png" alt="Foto do usuário" />
            </div>
            <div className={styles.userComment}>
                <span>{email}</span>
                <span>{body}</span>
            </div>
        </div>
    )
}

export default Comment