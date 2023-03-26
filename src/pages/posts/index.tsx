import { IPost } from "../../@types/post"
import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import PostCard from "../../componentes/postCard"

import styles from './index.module.scss'
import { IUser } from "../../@types/users"
import { IQuantityItems } from "../../@types/clicks"

interface IPosts{
    users: IUser[];
    filterItens?: (arg:string)=>void;
    filteredItens?: IPost[];
    valueInput: string;  
    quantityClicks: () => void;
    quantityActions: IQuantityItems;
}

const Posts = ({ users, filterItens, filteredItens, valueInput, quantityClicks, quantityActions } : IPosts)=>{

    const lastIndex = quantityActions.itemsPerSection * quantityActions.clicks 
    const items = filteredItens?.slice(0,lastIndex)

    return (
        <section className={styles.container}>
            <Menu filterPosts = {filterItens} value = {valueInput} disableInput = {false}/>
            <div className={styles.posts}>
                {items?.map((post)=>(
                    <PostCard key={post.id} id={post.id} body={post.body} title={post.title} userId={post.userId} users={users}/>
                ))}
            </div>
            {items?.length !== filteredItens?.length ? 
            <div className={styles.button}>
                <Button textButton="Carregar mais" onClick = {quantityClicks}/>
            </div> : ''}
        </section>
    )
}

export default Posts