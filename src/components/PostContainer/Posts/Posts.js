import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import {postService} from "../../../services/postServise";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css'

const Posts = () => {

    // const state = useState([])
    // const [posts, setPosts] = state
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value))
    }, []);


    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPost={setPostDetails}/>)}
            </div>
            <hr/>
            <div>
                {postDetails != null && <PostDetails postDetails={postDetails}/>}
            </div>
        </div>
    );

};

export {Posts};