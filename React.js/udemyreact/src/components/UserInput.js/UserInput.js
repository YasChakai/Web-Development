import React from 'react'

const UserInput = (props) => {
    return (
        
            <input onChange={props.change} type="text" value={props.huidigeNaam}/>
        
    )
}


export default UserInput

