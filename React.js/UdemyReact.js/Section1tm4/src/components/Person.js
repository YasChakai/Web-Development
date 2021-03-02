import React from 'react';

const Person = (props) => {

    return (
    <div>
     <p onClick={props.click}>Im a {props.Name} i am {props.Age} years old</p>
     <p>{props.children}</p>
</div>)
};


export default Person;