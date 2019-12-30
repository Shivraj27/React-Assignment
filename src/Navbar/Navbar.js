import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MaterialIcon from 'material-icons-react'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import NavItems from './Navbar.json'

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
    },
    fontSize: {
        fontSize: '15px',
    },
    container: {
        color: '#686f7a',
        backgroundColor: '#f7f8fa',
    },
}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" className={classes.container}>
                <Toolbar>
                    {NavItems.map((item, index) => {
                        return (
                            <div key={index} className={classes.menuItem}>
                                <IconButton className={classes.menuIcon}>
                                    <MaterialIcon icon={item.icon} />
                                </IconButton>
                                {item.isSelected ? (
                                    <b className={classes.fontSize}>
                                        {item.title}
                                    </b>
                                ) : (
                                    <span>{item.title}</span>
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
        </div>
    )
}

export default withStyles(useStyles)(NavBar)
