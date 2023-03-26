import { useNavigate } from 'react-router-dom'

import { IUser } from '../../@types/users'

import Button from '../../componentes/button'
import InfoUser from '../../componentes/infoUser'
import Menu from '../../componentes/menu'

import styles from './index.module.scss'


interface IDetailsUser extends IUser{}

const DetailsUser = ({ address, company, email,id, name, phone, username, website } : IDetailsUser)=>{
    const allInfos = [
        { infoRequest: "Username:", infoAnswer: username, id: 1 },
        { infoRequest: "Name:", infoAnswer: name, id: 2 },
        { infoRequest: "Email:", infoAnswer: email, id: 3 },
        { infoRequest: "City:", infoAnswer: address?.city, id: 4},
        { infoRequest: "Phone:", infoAnswer: phone, id: 5 },
        { infoRequest: "Company name:", infoAnswer: company?.name, id: 6 },
        { infoRequest: "catchPhrase:", infoAnswer: company?.catchPhrase, id: 7 },
        { infoRequest: "Website:", infoAnswer: website, id: 8 },
    ]

    const navigateRoutes = useNavigate()

    const backRoute = ()=>{
        navigateRoutes(-1)
    }

    return (
        <section className={styles.container}>
            <Menu />
            <div className={styles.content}>
                <div className={styles.userPhoto}>
                    <img src="/imgs/user.png" alt="Foto do usuário" />
                </div>
                <div className={styles.infos}>
                   {allInfos.map((item)=>(
                        <InfoUser key={item.id} infoRequest={item.infoRequest} infoAnswer={item.infoAnswer} />
                   ))}
                </div>
                <div className={styles.button} onClick={backRoute}>
                    <Button textButton='Voltar'/>
                </div>
            </div>
        </section>
    )
}

export default DetailsUser