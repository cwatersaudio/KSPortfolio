import React from 'react'

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    function toggleOpen() {
        setOpen(!open);

    }
    return (
        <nav className={`container ${open ? "extended" : ""}`}>
            <div className={open ? "menu-container full-menu" : "menu-container"} id="toggle">
                <a href="#" className="menu" onClick={toggleOpen}>
                    <i className={open ? "fa fa-times" : "fa fa-bars"} aria-hidden="true" />
                </a>
                {open && (
                    <div className="open overlay" id="overlay">
                        <nav>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#work">Work</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>)}
            </div>
        </nav>

    )
}

export default Menu