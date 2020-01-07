import React from 'react'
import NavBar from './Containers/Components/Navbar/Navbar'
import Instructors from './Containers/Components/Instructor/Instructors'

function Home() {
    return (
        <div>
            <NavBar isTopics={true} />
            <Instructors />
        </div>
    )
}

export default Home
