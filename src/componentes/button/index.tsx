import styles from './index.module.scss'

interface IButton{
    textButton: string;
    onClick?: ()=>void;
}

const Button = ({textButton, onClick}: IButton)=>{
    return (
        <>
            <button className={styles.button} type='button' onClick={onClick} title={textButton}>
                {textButton}
            </button>
        </>
    )
}

export default Button