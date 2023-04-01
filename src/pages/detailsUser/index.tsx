import { useNavigate, useParams } from 'react-router-dom'

import { IUser } from '../../@types/users'

import Button from '../../componentes/button'
import InfoUser from '../../componentes/infoUser'
import Menu from "../../componentes/menu"

import styles from './index.module.scss'
import { useContext, useEffect } from 'react'
import { PostContext } from '../../context/postContext'
import { fetchUsers } from '../../axios/requests'
import { convertStringToNumber } from '../../utils/convertStringToNumber'


const DetailsUser = ()=>{
    const { users, setUsers} = useContext(PostContext)
    const {id} = useParams()

    useEffect(()=>{
        fetchUsers(setUsers)
    }, [])

    const findUserSingle = ()=>{
        const userId = convertStringToNumber(id)

        return users.find((user)=>user.id === userId)
    }

    const userSingle = findUserSingle()

    const allInfos = [
        { infoRequest: "Username:", infoAnswer: userSingle?.username, id: 1 },
        { infoRequest: "Name:", infoAnswer: userSingle?.name, id: 2 },
        { infoRequest: "Email:", infoAnswer: userSingle?.email, id: 3 },
        { infoRequest: "City:", infoAnswer: userSingle?.address.city, id: 4},
        { infoRequest: "Phone:", infoAnswer: userSingle?.phone, id: 5 },
        { infoRequest: "Company name:", infoAnswer: userSingle?.company.name, id: 6 },
        { infoRequest: "Catch Phrase:", infoAnswer: userSingle?.company.catchPhrase, id: 7 },
        { infoRequest: "Website:", infoAnswer: userSingle?.website, id: 8 },
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