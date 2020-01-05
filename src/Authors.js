import React from 'react'
import './App.css'
import NavBar from './Navbar'
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
