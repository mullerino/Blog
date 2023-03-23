import Comment from '../../componentes/comment'
import Menu from '../../componentes/menu'
import Post from '../../componentes/post'
import styles from './index.module.css'

const DetailsPost = ()=>{
    return (
        <section>
            <Menu/>
            <div>
                <Post/>
            </div>
            <div className={styles.coments}>
                <h2>Comentários</h2>
                <div>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
                
            </div>
        </section>
    )
}

export default DetailsPost