import { Link } from 'react-router-dom'

import { Note, Users, MagnifyingGlass } from 'phosphor-react'

import styles from './index.module.scss'

interface IMenu{
    filterPosts?: (arg:string)=>void;
    value?: string;
    disableInput?: boolean;
    placeholderInput?: string
}

const Menu = ({filterPosts, value, disableInput = true, placeholderInput}:IMenu)=>{

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        filterPosts?.(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to={'/'}>
                    <img src="/imgs/logo.svg" alt="Logo da aplicação" />
                </Link>
            </div>
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    <li>
                        <Link to={'/'} className={styles.link} >
                            <Note size={12} className={styles.icon}/>
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link to={'/users'} className={styles.link}>
                            <Users size={12} className={styles.icon}/>
                            Usuários
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.searchItens}>
                <MagnifyingGlass size={16} className={styles.searchIcon}/>
                <input type="text" placeholder={placeholderInput} onChange={handleInputChange} value={value} disabled = {disableInput}/>
            </div>
        </div>
    )
}

export default Menu