import styles from './index.module.css'
import { Note, Users, MagnifyingGlass } from 'phosphor-react'

const Menu = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="../../../public/imgs/logo.png" alt="" />
            </div>
            <div>
                <ul className={styles.menu}>
                    <li>
                        <Note size={12} style={{marginRight: '6px', display: 'inline-block'}}/>
                        Post
                    </li>
                    <li>
                        <Users size={12} style={{marginRight: '6px', display: 'inline-block'}}/>
                        Users
                    </li>
                </ul>
            </div>
            <div className={styles.searchItens}>
                <MagnifyingGlass size={18} className={styles.searchIcon}/>
                <input type="text" placeholder='Buscar' />
            </div>
        </div>
    )
}

export default Menu