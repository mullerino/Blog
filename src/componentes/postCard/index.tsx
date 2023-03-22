import styles from "./index.module.css"

const PostCard = ()=>{
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
                    <h3>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                </div>
                <div className={styles.detailsPost}>
                    <a href="">Leia agora</a>
                </div>
            </div>
        </main>
    )
}

export default PostCard