import InfoUser from '../../componentes/infoUser'
import Menu from '../../componentes/menu'
import styles from './index.module.css'

const DetailsUser = ()=>{
    return (
        <section className={styles.container}>
            <Menu/>
            <div className={styles.content}>
                <div className={styles.userPhoto}>
                    <img src="/imgs/user.png" alt="Foto do usuário" />
                </div>
                <div className={styles.infos}>
                    <InfoUser infoRequest='Username:' infoAnswer='Antonette'/>
                    <InfoUser infoRequest='Email:' infoAnswer='Shanna@melissa.tv'/>
                    <InfoUser infoRequest='Website:' infoAnswer='anastasia.net'/>
                    <InfoUser infoRequest='Company name:' infoAnswer='Deckow-Crist'/>
                    <InfoUser infoRequest='Name:' infoAnswer='Ervin Howell'/>
                    <InfoUser infoRequest='Phone:' infoAnswer='010-692-6593 x09125'/>
                    <InfoUser infoRequest='City:' infoAnswer='Wisokyburgh'/>
                </div>
            </div>
        </section>
    )
}

export default DetailsUser