import { NavLink } from 'react-router-dom';
import './Styles/NavBar.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <nav>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to='.'>
                    Profile
                    </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to='calendar'>
                    Calendar
                    </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to='tables'>
                    Tables
                    </NavLink>
            </nav>
        </div>
        </>
    )
}

export default NavBar