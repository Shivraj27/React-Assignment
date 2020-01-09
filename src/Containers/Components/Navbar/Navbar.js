import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MaterialIcon from 'material-icons-react'
import IconButton from '@material-ui/core/IconButton'
import NavItems from '../../../Data/categories.json'
import Topics from '../Topics/Topics'
import Styles from './Navbar.module.css'

const getActiveItem = data => {
    NavItems.map(item => {
        return (item.isSelected =
            item.subCategory === data.subCategory
                ? true
                : item.isSelected
                ? false
                : '')
    })
}

const NavBar = props => {
    const [topicsList, settopicsList] = useState(NavItems[0].topics)
    return (
        <div>
            <AppBar position="static" className={Styles.navbarContainer}>
                <Toolbar>
                    {NavItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    settopicsList(item.topics)
                                    getActiveItem(item)
                                }}
                                className={Styles.menuItem}
                            >
                                <IconButton className={Styles.menuIcon}>
                                    <MaterialIcon icon={item.icon} />
                                </IconButton>
                                {item.isSelected ? (
                                    <b className={Styles.fontSize}>
                                        {item.subCategory}
                                    </b>
                                ) : (
                                    <span>{item.subCategory}</span>
                                )}
                            </div>
                        )
                    })}

                    <section style={{ marginLeft: 'auto' }}>
                        <IconButton color="inherit" aria-label="More Options">
                            <MaterialIcon icon="more_vert" />
                        </IconButton>
                    </section>
                </Toolbar>
            </AppBar>
            {props.isTopics ? <Topics topics={topicsList} /> : ''}
        </div>
    )
}

export default NavBar
