import { IPost } from "../../@types/post"
import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import PostCard from "../../componentes/postCard"

import styles from './index.module.scss'
import { IUser } from "../../@types/users"

interface IPosts{
    users: IUser[];
    filterItens?: (arg:string)=>void;
    FilteredItens?: IPost[];
    valueInput: string;   
}

const Posts = ({ users, filterItens, FilteredItens, valueInput } : IPosts)=>{

    return (
        <section>
            <Menu filterPosts = {filterItens} value = {valueInput} disableInput = {false}/>
            <div className={styles.posts}>
                {FilteredItens?.map((post)=>(
                    <PostCard key={post.id} id={post.id} body={post.body} title={post.title} userId={post.userId} users={users}/>
                ))}
            </div>
            <div className={styles.button}>
                <Button/>
            </div>
        </section>
    )
}

export default Posts