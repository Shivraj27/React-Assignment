import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { Link } from 'react-router-dom'
import AuthorInfoDetails from '../../../Data/authors.json'
import Styles from './Instructor.module.css'

const Instructors = () => {
    return (
        <div>
            <span className={Styles.title}>Popular Instructors </span>
            <div className={Styles.container}>
                {AuthorInfoDetails.map((instructor, index) => {
                    const imageSource =
                        process.env.PUBLIC_URL + '/images/' + instructor.profile
                    return (
                        <Link
                            key={index}
                            to={{
                                pathname: '/author',
                                state: {
                                    author: instructor,
                                },
                            }}
                        >
                            <Card className={Styles.card}>
                                <CardMedia
                                    className={Styles.media}
                                    image={imageSource}
                                    component="div"
                                />
                                <CardContent>
                                    <b className={Styles.author}>
                                        {instructor.name}
                                    </b>
                                    <p>{instructor.skillSet}</p>
                                    <div className={Styles.footer}>
                                        <span>
                                            <b>
                                                {
                                                    instructor['description']
                                                        .studentsCount
                                                }
                                            </b>
                                            &nbsp;students
                                        </span>
                                        <p>
                                            {
                                                instructor['description']
                                                    .coursesCount
                                            }{' '}
                                            courses
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Instructors
