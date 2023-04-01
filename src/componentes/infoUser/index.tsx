import styles from './index.module.scss'

interface IInfos {
    infoRequest: string;
    infoAnswer: string | undefined;
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