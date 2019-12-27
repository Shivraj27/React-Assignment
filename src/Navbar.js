import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    // This group of buttons will be aligned to the right
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
                    <div className={classes.menuItem}>
                        <IconButton
                            className={classes.menuIcon}
                            aria-label="delete"
                        >
                            <CloudUploadIcon />
                        </IconButton>
                        <b className={classes.fontSize}>Development</b>
                    </div>
                    <div className={classes.menuItem}>
                        <IconButton
                            className={classes.menuIcon}
                            aria-label="delete"
                        >
                            <CloudUploadIcon />
                        </IconButton>
                        <span className={classes.fontSize}>Development</span>
                    </div>
                    <div className={classes.menuItem}>
                        <IconButton
                            className={classes.menuIcon}
                            aria-label="delete"
                        >
                            <CloudUploadIcon />
                        </IconButton>
                        <span className={classes.fontSize}>Development</span>
                    </div>
                    <div className={classes.menuItem}>
                        <IconButton
                            className={classes.menuIcon}
                            aria-label="delete"
                        >
                            <CloudUploadIcon />
                        </IconButton>
                        <span className={classes.fontSize}>Development</span>
                    </div>
                    <section className={classes.rightToolbar}>
                        <IconButton color="inherit" aria-label="More Options">
                            <MoreVertIcon />
                        </IconButton>
                    </section>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(useStyles)(NavBar)
