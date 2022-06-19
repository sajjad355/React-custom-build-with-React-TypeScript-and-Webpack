import React from 'react'
import {useState} from 'react'

type HomeProps={
    count:number
    name?:string
    isLoggedIn:boolean
}

export default function Home(props:HomeProps) {
    
  const[isLoggedIn, setIsLoggedIn]=useState(true)

    return (
        <div>
            <h1>
                { props.isLoggedIn? 'Name is '+ props.name +' that count ' +props.count+ '':""}
            </h1>
        </div>
    )
}