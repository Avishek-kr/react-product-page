import React from 'react'
import classes from './TopBar.module.css'

function TopBar() {
    return (
             <header>
             <nav className={classes.topNavbar}>
        <img src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png?resize=561%2C160&ssl=1" alt="Amazon logo" />
        </nav>
      </header>
    )
}

export default TopBar
