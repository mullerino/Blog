import { useContext, useEffect } from "react";
import { IUser } from "../../@types/users"
import Menu from "../../componentes/menu"
import UserCard from "../../componentes/userCard"

import styles from './index.module.scss'
import { PostContext } from "../../context/postContext";
import { fetchUsers } from "../../axios/requests";

/*interface IUsers {
    filterItens?: (arg:string)=>void;
    filteredItens?: IUser[];
    valueInput: string; 
    placeholderInput: string
}*/

const Users = ()=>{
    const {users, setUsers} = useContext(PostContext)

    useEffect(()=>{
        fetchUsers(setUsers)
    }, [])

    return (
        <section className={styles.container}>
            <Menu disableInput={false} placeholderInput="Buscar pelo nome"/>
            <div className={styles.cardUsers}>
                {users.map((user)=>(
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