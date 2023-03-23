import styles from './index.module.css'


const userCard = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.userImg}>
                <img src="/imgs/user.png" alt="Foto do usuário" />
            </div>
            <div className={styles.nameCity}>
                <h3>Leanne Graham</h3>
                <span>Gwenborough</span>
            </div>
            <div className={styles.lastInfos}>
                <span>
                    Username:
                    <span className={styles.answers}> Bret</span><br/>
                </span>
                <span>
                    Email:
                    <span className={styles.answers}> Shanna@melissa.tv</span>
                </span>
            </div>
        </div>
    )
}

export default userCard