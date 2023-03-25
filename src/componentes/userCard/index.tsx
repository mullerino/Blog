import { Link } from 'react-router-dom';
import styles from './index.module.css'

interface IUserCard{
    name: string;
    city: string;
    username: string;
    email: string
    id: number;
}

const userCard = ( { name, city, email, username, id} : IUserCard )=>{
    return (
        <div className={styles.container}>
            <Link to={`/user/${id}`} className={styles.link}>
                <div className={styles.userImg}>
                    <img src="/imgs/user.png" alt="Foto do usuário" />
                </div>
                <div className={styles.nameCity}>
                    <h3>{name}</h3>
                    <span>{city}</span>
                </div>
                <div className={styles.lastInfos}>
                    <span>
                        Username:
                        <span className={styles.answers}> {username}</span><br/>
                    </span>
                    <span>
                        Email:
                        <span className={styles.answers}> {email}</span>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default userCard