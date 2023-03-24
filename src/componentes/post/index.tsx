import styles from './index.module.css'

interface IPostContent {
    title: string;
    body: string
}

const Post = ({ title, body } : IPostContent)=>{
    return (
        <main className={styles.container}>
            <div className={styles.titlePost}>
                <h1>
                    {title}
                </h1>
            </div>
            <div className={styles.contentPost}>
                <p>
                    {body}
                </p>
            </div>
        </main>
    )
}

export default Post