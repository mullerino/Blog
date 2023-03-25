import { IAddress, ICompany } from '../../@types/users';
import styles from './index.module.css'

interface IInfos {
    infoRequest: string;
    infoAnswer: string;
}

const InfoUser = ( {infoRequest, infoAnswer} : IInfos )=>{
    return (
        <div className={styles.container}>
            <span>{infoRequest}</span>
            <span>{infoAnswer}</span>
        </div>
    )
}

export default InfoUser