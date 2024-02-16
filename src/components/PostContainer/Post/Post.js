import React from 'react';

const Post = ({post, getCurrentPost}) => {
    const {id, title} = post;
    return (
        <div>
            <div>post id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>getCurrentPost(post)}>More info about {id} post</button>
            <br/>
            <br/>
        </div>
    );
};

export {Post};