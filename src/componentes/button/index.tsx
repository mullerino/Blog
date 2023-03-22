import styles from './index.module.css'

const Button = ()=>{
    return (
        <>
            <button className={styles.button} type='button' onClick={()=> console.log('apertado')}>
                Carregar mais
            </button>
        </>
    )
}

export default Button