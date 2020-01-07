import React from 'react'
import Button from '@material-ui/core/Button'
import Styles from './Topics.module.css'

const Topics = props => {
    return (
        <div>
            <span className={Styles.title}>Popular topics </span>
            <div className={Styles.container}>
                {props.topics &&
                    props.topics.map((topic, index) => {
                        return (
                            <label
                                className={Styles.topicLabel}
                                key={index}
                                htmlFor="outlined-button-file"
                            >
                                <Button
                                    variant="text"
                                    className={Styles.topics}
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

export default Topics
