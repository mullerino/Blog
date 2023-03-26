import { Link } from "react-router-dom"
import { IUser } from "../../@types/users"
import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import UserCard from "../../componentes/userCard"

import styles from './index.module.scss'

interface IUsers {
    filterItens?: (arg:string)=>void;
    FilteredItens?: IUser[];
    valueInput: string;   
}

const Users = ({ filterItens, FilteredItens, valueInput }: IUsers)=>{
    return (
        <section>
            <Menu filterPosts = {filterItens} value = {valueInput} disableInput = {false}/>
            <div className={styles.cardUsers}>
                {FilteredItens?.map((user)=>(
                    <UserCard 
                    key={user.id} 
                    id ={user.id} 
                    name = {user.name} 
                    city={user.address.city} 
                    username = {user.username} 
                    email={user.email}
                    />
                ))}
            </div>
            <div className={styles.button}>
                <Button/>
            </div>
        </section>
    )
}

export default Users