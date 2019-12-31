import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#007791!important',
        color: '#fff',
        height: '137px',
        display: 'flex',
    },
    titleInfo: {
        paddingLeft: '10pc',
        paddingTop: '1pc',
    },
    container: {
        paddingLeft: '10pc',
        paddingTop: '1pc',
    },
    user: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        width: '50%',
        height: '50%',
        borderRadius: '50%',
    },
    button: {
        color: '#fff',
        backgroundColor: '#ec5252',
        margin: '20px auto 0',
        border: '1px solid transparent',
        width: '100%',
        fontWeight: '600',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        padding: '11px 12px',
        fontSize: '15px',
        lineHeight: 1.35135,
        borderRadius: '2px',
        display: 'block',
    },
    socialLinks: {
        margin: '20px 0 0',
        textAlign: 'center',
    },
    links: {
        fontSize: '21px',
        lineHeight: '35px',
        margin: '0 7px',
    },
    '@global': {
        ul: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '30px',
            listStyle: 'none',
            padding: 0,
        },
        li: {
            borderLeft: '1px solid rgba(41,48,59,.25)',
            padding: '0 15px',
            textAlign: 'left',
            fontSize: '22px',
        },
    },
}))

const AuthorsInfo = () => {
    const classes = useStyles()
    return (
        <div className="parentContainer">
            <div className={classes.header}>
                <div className={classes.titleInfo}>
                    <h2>Academind by Maximilian Schwarzmüller</h2>
                    <span style={{ fontSize: '18px' }}>Online Education</span>
                </div>
            </div>
            <div className={classes.container}>
                <div className="col-sm-3">
                    <div className={classes.user}>
                        <img
                            alt="Academind by Maximilian Schwarzmüller"
                            className={classes.avatar}
                            src="https://i.udemycdn.com/user/200_H/31926668_94e7_6.jpg"
                        />
                    </div>
                    <button
                        type="button"
                        variant="text"
                        className={classes.button}
                        component="span"
                    >
                        Send Message
                    </button>
                    <div className={classes.socialLinks}>
                        <FontAwesomeIcon
                            className={classes.links}
                            icon={faGlobe}
                            size="1x"
                            color="#007791"
                        />
                        <FontAwesomeIcon
                            className={classes.links}
                            icon={faTwitter}
                            size="1x"
                            color="#007791"
                        />
                        <FontAwesomeIcon
                            className={classes.links}
                            icon={faFacebookF}
                            size="1x"
                            color="#007791"
                        />
                        <FontAwesomeIcon
                            className={classes.links}
                            icon={faYoutube}
                            size="1x"
                            color="#007791"
                        />
                    </div>
                </div>
                <div className="col-sm-9">
                    <div
                        style={{
                            fontSize: '15px',
                            fontFamily:
                                'open sans,helvetica neue,Helvetica,Arial,sans-serif',
                        }}
                    >
                        <p></p>
                        <p>
                            Bundling the courses and know how of successful
                            instructors, Academind strives to deliver high
                            quality online education.&nbsp;
                        </p>
                        <p>
                            Online Education, Real-Life Success - that's what
                            Academind stands for. Learn topics like web
                            development, data analyses and more in a fun and
                            engaging way.
                        </p>
                        <p>
                            Currently, you can find courses published by
                            Maximilian Schwarzmüller and Manuel Lorenz, more
                            instructors to come!
                        </p>
                        <p>Keep learning!</p>
                        <p></p>
                    </div>
                    <ul>
                        <li>
                            <div style={{ fontSize: '65%' }}>
                                Total students
                            </div>
                            <div className="a2">792,509</div>
                        </li>
                        <li>
                            <div style={{ fontSize: '65%' }}>Courses</div>
                            <div className="a2">22</div>
                        </li>
                        <li>
                            <div style={{ fontSize: '65%' }}>Reviews</div>
                            <div className="a2">161,828</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(AuthorsInfo)
