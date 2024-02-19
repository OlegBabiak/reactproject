import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {PostForm} from "./PostForm";
import {Posts} from "./Posts";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // postService.getAll().then(value => value.data).then(value => setPosts(value)) // or the same:
        // оскільки https://jsonplaceholder.typicode.com/ не дописує до бази дані що йому передані можна лише дописати в
        // масив posts[] відповідь що jsonplaceholder надав (нібито записавши в БД); тому потрібно передати setPosts в <PostForm/>
        postService.getAll().then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};