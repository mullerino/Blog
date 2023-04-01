import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { IComment } from '../../@types/comment'
import { IPost } from '../../@types/post'
import Button from '../../componentes/button'

import Comment from '../../componentes/comment'
import Menu from "../../componentes/menu"
import Post from '../../componentes/post'

import styles from './index.module.scss'
import { PostContext } from '../../context/postContext'
import { fetchCommentsOfPost, fetchPosts } from '../../axios/requests'
import { convertStringToNumber } from '../../utils/convertStringToNumber'

const DetailsPost = ()=>{
    const { posts, setPosts, comments, setComments } = useContext(PostContext)
    const { id } = useParams()
    
    const actualPost = posts.filter((post)=>post.id === convertStringToNumber(id))

    useEffect(()=>{
        fetchCommentsOfPost(convertStringToNumber(id), setComments);
        fetchPosts(setPosts)
    }, [])

    const navigateRoutes = useNavigate()

    const backRoute = ()=>{
        navigateRoutes(-1)
    }
       
    return (
        <section className={styles.container}>
            <Menu/>
            <div>
                {actualPost.map((post)=>(
                    <Post key={post.id} body={post.body} title={post.title}/>
                ))}
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
                        postId={comment.postId}
                        />
                    ))}
                </div>
                <div className={styles.button}>
                    <Button textButton="Voltar" onClick={backRoute}/>
                </div>
            </div>
        </section>
    )
}

export default DetailsPost