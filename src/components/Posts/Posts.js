// import React from 'react';
// import Post from '../Post/Post'

const Posts = () => {
    let posts = [];
    fetch('https://jsonplaceholder.typicode.com/').then(value => value.json().then()).then(value => posts)
    return (
        <div>
            {posts.map(post=><P key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};