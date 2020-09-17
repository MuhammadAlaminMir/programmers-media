import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import PostComment from '../PostComment/PostComment';

const PostDetail = () => {
    const postId = sessionStorage.postId;
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        Axios(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        ).then((data) => setPost(data.data));
    }, [postId]);

    useEffect(() => {
        Axios(
            `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`
        ).then((data) => setComments(data.data));
    }, [postId]);

    return (
        <div>
            <h2 className="center">Post: {post.id} Details</h2>
            <div className="box">
                <PostCard post={post}></PostCard>
            </div>
            <h3 className="center">Comment On This Post:</h3>
            {comments.map((comment) => (
                <PostComment comment={comment} key={comment.id} />
            ))}
        </div>
    );
};

export default PostDetail;
