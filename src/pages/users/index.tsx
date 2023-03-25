import { Link } from "react-router-dom"
import { IUser } from "../../@types/users"
import Button from "../../componentes/button"
import Menu from "../../componentes/Menu"
import UserCard from "../../componentes/userCard"

import styles from './index.module.css'

interface IUsers {
    users: IUser[];
}

const Users = ({ users }: IUsers)=>{
    return (
        <section>
            <Menu/>
            <div className={styles.cardUsers}>
                {users.map((user)=>(
                    <Link to={`/user/${user.id}`} className={styles.link} key={user.id}>
                        <UserCard name = {user.name} city={user.address.city} username = {user.username} email={user.email}/>
                    </Link>
                    
                ))}
            </div>
            <div className={styles.button}>
                <Button/>
            </div>
        </section>
    )
}

export default Users