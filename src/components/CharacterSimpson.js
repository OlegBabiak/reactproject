import React from 'react';

const CharacterSimpson = ({character}) => {
    const name = character.name;
    const age = character.age;
    const photo = character.photo;
    const info = character.info;
    return (
        <div>
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
            <h2>{info}</h2>
            <img src={photo} alt={name} width={200} />
        </div>
    );
};

export default CharacterSimpson;