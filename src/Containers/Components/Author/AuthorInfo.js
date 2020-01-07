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
        paddingTop: '3pc',
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

const getIcon = icon => {
    switch (icon) {
        case 'faGlobe':
            return faGlobe
        case 'faTwitter':
            return faTwitter
        case 'faFacebook':
            return faFacebookF
        case 'faYoutube':
            return faYoutube
        default:
            return faGlobe
    }
}

const AuthorsInfo = props => {
    const classes = useStyles()
    const author = props.data.location.state.author
    const imageSource = process.env.PUBLIC_URL + '/images/' + author.profile
    return (
        <div className="parentContainer">
            <div className={classes.header}>
                <div className={classes.titleInfo}>
                    <h2>{author.name}</h2>
                    <span style={{ fontSize: '18px' }}>{author.title}</span>
                </div>
            </div>
            <div className={classes.container}>
                <div className="col-sm-3">
                    <div className={classes.user}>
                        <img alt={author.name} className={classes.avatar} src={imageSource} />
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
                        {author.social.map(item => {
                            return (
                                <a href={item.url}>
                                    <FontAwesomeIcon
                                        className={classes.links}
                                        icon={getIcon(item.icon)}
                                        size="1x"
                                        color="#007791"
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="col-sm-9" style={{ paddingRight: '10pc' }}>
                    <div
                        style={{
                            fontSize: '15px',
                            fontFamily:
                                'open sans,helvetica neue,Helvetica,Arial,sans-serif',
                        }}
                    >
                        <p></p>
                        <p>{author.description.intro}&nbsp;</p>
                        <p>{author.description.skills}</p>
                        <p>{author.description.important}</p>
                        <p>Keep learning!</p>
                        <p></p>
                    </div>
                    <ul>
                        <li>
                            <div style={{ fontSize: '65%' }}>
                                Total students
                            </div>
                            <div className="a2">
                                {author.description.studentsCount}
                            </div>
                        </li>
                        <li>
                            <div style={{ fontSize: '65%' }}>Courses</div>
                            <div className="a2">
                                {author.description.coursesCount}
                            </div>
                        </li>
                        <li>
                            <div style={{ fontSize: '65%' }}>Reviews</div>
                            <div className="a2">
                                {author.description.reviews}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withStyles(useStyles)(AuthorsInfo)
