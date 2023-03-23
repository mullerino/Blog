import styles from './index.module.css'

const Comment = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.userPhoto}>
                <img src="/imgs/user.png" alt="Foto do usuário" />
            </div>
            <div className={styles.userComment}>
                <span>Eliseo@gardner.biz</span>
                <span>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</span>
            </div>
        </div>
    )
}

export default Comment