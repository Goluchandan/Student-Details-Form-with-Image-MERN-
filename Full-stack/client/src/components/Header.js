import React from 'react'
import { NavLink } from "react-router-dom"
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <div className= {styles.navbar_main_div}>
                <div>
                    <NavLink className={styles.header_navlink} to="/" >Navbar</NavLink>

                     <NavLink className={styles.header_navlink} to="/register">Register</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header