import React from 'react'

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    function toggleOpen() {
        setOpen(!open);

    }
    return (
        <nav className={`container ${open ? "extended" : ""}`}>
            <div className={open ? "menu-container full-menu" : "menu-container"} id="toggle">
                <button type='button' className="nav-toggle" onClick={toggleOpen}>
                    <i className={open ? "fa fa-times" : "fa fa-bars"} aria-hidden="true" />
                </button>
                {open && (
                    <div className="open overlay" id="overlay">
                        <nav className='nav'>
                            <ul className='nav__list'>
                                <li className='nav__item'><a href="#home" className='nav__link'>Home</a></li>
                                <li className='nav__item'><a href="#about" className='nav__link'>About</a></li>
                                <li className='nav__item'><a href="#work" className='nav__link'>Work</a></li>
                                <li className='nav__item'><a href="#contact" className='nav__link'>Contact</a></li>
                            </ul>
                        </nav>
                    </div>)}
            </div>
        </nav>

    )
}

export default Menu

