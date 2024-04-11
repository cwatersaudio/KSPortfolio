import React from 'react'

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    // const menu = document.querySelector('#toggle');
    // const menuItems = document.querySelector('#overlay');
    // const menuContainer = document.querySelector('.menu-container');
    // const menuIcon = document.querySelector('i');

    // menu.addEventListener('click', () => {
    //     menuItems.classList.toggle('open');
    //     menuContainer.classList.toggle('full-menu');
    //     menuIcon.classList.toggle('fa-bars');
    //     menuIcon.classList.toggle('fa-times');
    // });

    function toggleOpen() {
        setOpen(!open);

    }
    return (
        <div className='menu' >
            <div class="container">
                <div className={open ? "menu-container full-menu" : "menu-container"} id="toggle">
                    <a href="#" className="menu" onClick={toggleOpen}><i className={open ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i></a>
                </div>
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


        </div >
    )
}

export default Menu