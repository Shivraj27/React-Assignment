import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Styles from './Author.module.css'

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
    const author = props.data.location.state.author
    const imageSource = process.env.PUBLIC_URL + '/images/' + author.profile
    return (
        <div className="parentContainer">
            <div className={Styles.header}>
                <div className={Styles.titleInfo}>
                    <h2>{author.name}</h2>
                    <span style={{ fontSize: '18px' }}>{author.title}</span>
                </div>
            </div>
            <div className={Styles.container}>
                <div className="col-sm-3">
                    <div className={Styles.user}>
                        <img
                            alt={author.name}
                            className={Styles.avatar}
                            src={imageSource}
                        />
                    </div>
                    <button
                        type="button"
                        variant="text"
                        className={Styles.button}
                        component="span"
                    >
                        Send Message
                    </button>
                    <div className={Styles.socialLinks}>
                        {author.social.map(item => {
                            return (
                                <a href={item.url}>
                                    <FontAwesomeIcon
                                        className={Styles.links}
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

export default AuthorsInfo
