import { IUser } from '../../@types/users'
import InfoUser from '../../componentes/infoUser'
import Menu from '../../componentes/menu'
import styles from './index.module.css'

interface IDetailsUser extends IUser{}

const DetailsUser = ({ address, company, email,id, name, phone, username, website } : IDetailsUser)=>{
    const allInfos = [
        {
            infoRequest: "Username:",
            infoAnswer: username
        },
        {
            infoRequest: "Name:",
            infoAnswer: name
        },
        {
            infoRequest: "Email:",
            infoAnswer: email
        },
        {
            infoRequest: "City:",
            infoAnswer: address.city
        },
        {
            infoRequest: "Phone:",
            infoAnswer: phone
        },
        {
            infoRequest: "Company name:",
            infoAnswer: company.name
        },
        {
            infoRequest: "catchPhrase:",
            infoAnswer: company.catchPhrase
        },
        {
            infoRequest: "Website:",
            infoAnswer: website
        },
    ]

    return (
        <section>
            <Menu/>
            <div className={styles.content}>
                <div className={styles.userPhoto}>
                    <img src="/imgs/user.png" alt="Foto do usuário" />
                </div>
                <div className={styles.infos}>
                   {allInfos.map((item,index)=>(
                        <InfoUser key={index} infoRequest={item.infoRequest} infoAnswer={item.infoAnswer} />
                   ))}
                </div>
            </div>
        </section>
    )
}

export default DetailsUser