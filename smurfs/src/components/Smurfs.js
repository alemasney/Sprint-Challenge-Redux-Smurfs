import React from 'react';

const Smurfs = props => {
    return (
        <div>
            <ul>
                {props.smurfs.map( smurf => (
                    <li key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <p>{smurf.height}</p>
                        <p>{smurf.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Smurfs;