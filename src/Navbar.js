import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MaterialIcon from 'material-icons-react'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import NavItems from './Data/categories.json'
import Topics from './Topics'

const useStyles = makeStyles(theme => ({
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: -12,
    },
    menuItem: {
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: '5px',
        marginRight: '5px',
        cursor: 'pointer',
        padding: '5px',
        '&:hover': {
            backgroundColor: '#e8e9eb',
        },
    },
    menuIcon: {
        padding: '5px',
        '&:hover': {
            background: 'none',
        },
    },
    fontSize: {
        fontSize: '15px',
    },
    container: {
        color: '#686f7a',
        backgroundColor: '#f7f8fa',
    },
}))

const NavBar = props => {
    const classes = useStyles()
    const [topicsList, settopicsList] = useState(NavItems[0].topics)
    return (
        <div>
            <AppBar position="static" className={classes.container}>
                <Toolbar>
                    {NavItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() =>
                                    settopicsList(NavItems[1].topics)
                                }
                                className={classes.menuItem}
                            >
                                <IconButton className={classes.menuIcon}>
                                    <MaterialIcon icon={item.icon} />
                                </IconButton>
                                {item.isSelected ? (
                                    <b className={classes.fontSize}>
                                        {item.subCategory}
                                    </b>
                                ) : (
                                    <span>{item.subCategory}</span>
                                )}
                            </div>
                        )
                    })}

                    <section className={classes.rightToolbar}>
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

export default withStyles(useStyles)(NavBar)
