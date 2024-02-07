import React from 'react';

const CharacterRM = ({character}) => {

    //(властивості id,name,status,species,gender,image)
    const id = character.id;
    const name = character.name;
    const status = character.status;
    const species = character.species;
    const gender = character.gender;
    const image = character.image;
    return (
        <div>
            <h1>Id: {id}; name: {name} </h1>
            <h2>status: {status}; species: {species}; gender: {gender}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default CharacterRM;