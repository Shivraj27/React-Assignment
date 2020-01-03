import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import TopicsList from './categories.json'

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '20px',
        lineHeight: '1.47em',
        color: '#505763',
        padding: '40px',
    },
    container: {
        padding: '10px 0 0 40px',
    },
    topics: {
        width: '230px',
        height: '54px',
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: '15px',
        boxShadow:
            '0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)',
        backgroundColor: '#fff',
        border: 'none',
        textTransform: 'none',
        paddingLeft: '15px',
        '&:hover': {
            outline: 0,
            color: '#003845',
            cursor: 'pointer',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px 2px rgba(20,23,28,.15)',
        },
    },
    topicLabel: {
        marginBottom: '10px',
        marginRight: '15px',
    },
}))

const Topics = () => {
    const classes = useStyles()
    return (
        <div>
            <span className={classes.title}>Popular topics </span>
            <div className={classes.container}>
                {TopicsList[0].topics.map((topic, index) => {
                    return (
                        <label
                            className={classes.topicLabel}
                            key={index}
                            htmlFor="outlined-button-file"
                        >
                            <Button
                                variant="text"
                                className={classes.topics}
                                component="span"
                            >
                                {topic}
                            </Button>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default withStyles(useStyles)(Topics)
