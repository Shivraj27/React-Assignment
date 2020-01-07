import React from 'react'
import NavBar from '../Navbar/Navbar'
import AuthorsInfo from './AuthorInfo'

function Authors(props) {
    return (
        <div>
            <NavBar isTopics={false} />
            <AuthorsInfo data={props} />
        </div>
    )
}

export default Authors
