import React from 'react'
import Home from "../src/components/Home"
import PersonsonList from './components/PersonList';

const persons=[
    {
        firstName:'sajjad',
        lastName:'rahman'
    },
    {
        firstName:'ifte',
        lastName:'khairul'
    }
]

export default function App() {
    return (
        <div>
          <Home count={8} name="sajjad"/>
          <PersonsonList persons={persons}/>
        </div>
    );
}