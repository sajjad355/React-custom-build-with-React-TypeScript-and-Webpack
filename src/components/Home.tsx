import React from 'react'

type HomeProps={
    count:number
    name:string
}

export default function Home(props:HomeProps) {
    let num=2;
    num=5;
    return (
        <div>
            <h1>
                Name is {props.name} that count {props.count}
            </h1>
        </div>
    )
}