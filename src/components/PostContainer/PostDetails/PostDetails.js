import React from 'react';

const PostDetails = ({postDetails}) => {
    let {id,userId,title,body} = postDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};