import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import InstructorItems from './Authors.json'

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '20px',
        lineHeight: '1.47em',
        color: '#505763',
        padding: '40px',
    },
    media: {
        height: '75px',
        width: '75px',
        borderRadius: '50%',
        margin: '20px auto 25px',
        filter: 'sepia(.1) grayscale(.1) saturate(.8)',
        opacity: 1,
    },
    card: {
        width: '216px',
        height: '290px',
        boxShadow:
            '0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)',
        opacity: 1,
        margin: '0 15px 0 0',
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'top',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderBottom: 'none',
        '&:hover': {
            outline: 0,
            color: '#003845',
            cursor: 'pointer',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px 2px rgba(20,23,28,.15)',
        },
    },
    container: {
        padding: '10px 0 0 40px',
    },
    footer: {
        position: 'absolute',
        bottom: '16px',
        left: '25%',
    },
    author: {
        fontSize: '15px',
        fontWeight: 600,
        lineHeight: 3,
    },
}))

const Instructors = () => {
    const classes = useStyles()
    return (
        <div>
            <span className={classes.title}>Popular Instructors </span>

            <div className={classes.container}>
                {InstructorItems.map((instructor, index) => {
                    console.log(instructor.imagePath)
                    return (
                        <Card key={index} className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require(`${instructor.imagePath}`)}
                                component="div"
                            />
                            <CardContent>
                                <b className={classes.author}>
                                    {instructor.name}
                                </b>
                                <p>{instructor.title}</p>
                                <div className={classes.footer}>
                                    <span>
                                        <b>{instructor.studentsCount}</b>
                                        &nbsp;students
                                    </span>
                                    <p>{instructor.coursesCount} courses</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default withStyles(useStyles)(Instructors)
