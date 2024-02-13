import React from 'react';

const User = ({user, getCurrentUser}) => {
    const {id, name} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            {/*необхідно додати event onClick={}, та запустити з допомогою анонімної функції()=>*/}
            <button onClick={()=>getCurrentUser(user)} > Details </button>
        </div>
    );
};

export default User;