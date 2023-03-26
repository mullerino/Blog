import { IComment } from '../../@types/comment'
import { IPost } from '../../@types/post'

import Comment from '../../componentes/comment'
import Menu from '../../componentes/menu'
import Post from '../../componentes/post'

import styles from './index.module.scss'


interface IDetailsPost extends IPost{
    getComments: (id: number) => void;
    comments: IComment[];
}

const DetailsPost = ({ title, body, id, comments, getComments } : IDetailsPost)=>{

    getComments(id)
       
    return (
        <section>
            <Menu/>
            <div>
                <Post body={body} title={title}/>
            </div>
            <div className={styles.coments}>
                <h2>Comentários</h2>
                <div>
                    {comments.map((comment)=>(
                        <Comment 
                        key={comment.id} 
                        body={comment.body} 
                        email={comment.email} 
                        id={comment.id} 
                        name={comment.name} 
                        postId={comment.postId}/>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default DetailsPost