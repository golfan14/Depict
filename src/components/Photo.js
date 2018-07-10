import React from 'react';

const Photo = props => {
    return (<div key={props.keyId} className="card" onClick={() => props.clicked(props.url, props.keyId)}>
        <img alt={props.title} src={props.url}/>
    </div>)
}

export default Photo; 