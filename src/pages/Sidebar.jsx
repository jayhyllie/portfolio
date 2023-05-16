import { useState } from "react";
import style from '../styles/Sidebar.module.scss';
import logo from "../assets/Logo-JS.svg";

const Sidebar = () => {
    const [active, setActive] = useState(false)
    function Hover() {
        setActive(!active)
    }
    return (
        <aside className={style.aside}>
            <a href="#home" className="nav__logo">
                <img src={logo} alt="logo" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className={style.nav__list}>
                        <li className={style.nav__list__item} onMouseEnter={Hover}><a href="#home"><i className="icon-home"></i></a></li>
                        <li className={style.nav__list__item} onMouseEnter={Hover}><a href="#about"><i className="icon-user-following"></i></a></li>
                        <li className={style.nav__list__item} onMouseEnter={Hover}><a href="#skills"><i className="icon-book-open"></i></a></li>
                        <li className={style.nav__list__item} onMouseEnter={Hover}><a href="#projects"><i className="icon-folder"></i></a></li>
                        <li className={style.nav__list__item} onMouseEnter={Hover}><a href="#contact"><i className="icon-note"></i></a></li>
                    </ul>
                </div>
            </nav>

            <div className="aside__footer">
                <span className={style.copyright}>&copy; 2023</span>
            </div>
        </aside>
    )
}

export default Sidebar;