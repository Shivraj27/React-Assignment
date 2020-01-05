import React from 'react'
import NavBar from './Navbar'
import Instructors from './Instructors'

function Home() {
    return (
        <div>
            <NavBar isTopics={true} />
            <Instructors />
        </div>
    )
}

export default Home
