import React from "react";

type PersonListProps={
    persons:{
        firstName:string
        lastName:string
    }[]
}

export default function PersonsonList(props:PersonListProps){

    return(
        
    <div>
        {props.persons.map(name=>{
            return(
                <div>
                  <h1>{name.firstName} {name.lastName}</h1>
                </div>
            )

        })}

    </div>
    )
}

