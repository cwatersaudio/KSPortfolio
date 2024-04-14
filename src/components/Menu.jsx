import React from 'react'

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    function toggleOpen() {
        setOpen(!open);

    }
    return (
        <nav>
            <div className={`container ${open ? "extended" : ""}`}>
                <div className={open ? "menu-container full-menu" : "menu-container"} id="toggle">
                    <a href="#" className="menu" onClick={toggleOpen}>
                        <i className={open ? "fa fa-times" : "fa fa-bars"} aria-hidden="true" />
                    </a>
                    {open && (
                        <div className="open overlay" id="overlay">
                            <nav>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>)}
                </div>
            </div>
        </nav>

    )
}

export default Menu