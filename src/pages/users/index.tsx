import Button from "../../componentes/button"
import Menu from "../../componentes/menu"
import UserCard from "../../componentes/userCard"

import styles from './index.module.css'

const Users = ()=>{
    return (
        <section>
            <Menu/>
            <div className={styles.cardUsers}>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
            <div className={styles.button}>
                <Button/>
            </div>
        </section>
    )
}

export default Users