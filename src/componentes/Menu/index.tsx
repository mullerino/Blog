import styles from './index.module.css'
import { Note, Users, MagnifyingGlass } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { IPost } from '../../@types/post';

interface IMenu{
    filterPosts: (arg:string)=>void;
    value: string;
}

const Menu = ({filterPosts, value}:IMenu)=>{

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        filterPosts(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/imgs/logo.svg" alt="Logo da aplicação" />
            </div>
            <div>
                <ul className={styles.menu}>
                    <li>
                        <Link to={'/'} className={styles.link}>
                            <Note size={12} style={{marginRight: '6px', display: 'inline-block'}}/>
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link to={'/users'} className={styles.link}>
                            <Users size={12} style={{marginRight: '6px', display: 'inline-block'}}/>
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.searchItens}>
                <MagnifyingGlass size={16} className={styles.searchIcon}/>
                <input type="text" placeholder='Buscar' onChange={handleInputChange} value={value}/>
            </div>
        </div>
    )
}

export default Menu