import { IUser } from "../../@types/users"
import Menu from "../../componentes/menu"
import UserCard from "../../componentes/userCard"

import styles from './index.module.scss'

interface IUsers {
    filterItens?: (arg:string)=>void;
    filteredItens?: IUser[];
    valueInput: string; 
}

const Users = ({ filterItens, filteredItens, valueInput }: IUsers)=>{

    return (
        <section className={styles.container}>
            <Menu filterPosts = {filterItens} value = {valueInput} disableInput = {false}/>
            <div className={styles.cardUsers}>
                {filteredItens?.map((user)=>(
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
        </section>
    )
}

export default Users