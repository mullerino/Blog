import styles from './index.module.css'

interface IUserCard{
    name: string;
    city: string;
    username: string;
    email: string
}

const userCard = ( { name, city, email, username } : IUserCard )=>{
    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default userCard