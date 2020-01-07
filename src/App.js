import React from 'react'
import './App.css'
import Home from './Home'
import Authors from './Containers/Components/Author/Authors'
import { Route, Switch } from 'react-router-dom'

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/author" component={Authors} />
            </Switch>
        </div>
    )
}

export default App
