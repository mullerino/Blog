import { IPost } from '../../@types/post'
import Comment from '../../componentes/comment'
import Menu from '../../componentes/menu'
import Post from '../../componentes/post'
import styles from './index.module.css'


const DetailsPost = ({title, body } : IPost)=>{
    return (
        <section>
            <Menu/>
            <div>
                <Post body={body} title={title}/>
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