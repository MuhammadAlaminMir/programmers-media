import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PostComment.css';

const PostComment = (props) => {
    const { name, email, body } = props.comment;

    const [picture, setPicture] = useState([0]);

    useEffect(() => {
        const url = `https://randomuser.me/api/?results=6/`;

        Axios(url)
            .then((data) => setPicture(data.data.results['0'].picture.large))
            .catch((err) => err.massage);
    }, [props.comment]);

    return (
        <div className="box">
            <div className="picture">
                <img src={picture} alt="please refresh the page" />
            </div>
            <div className="comment">
                <h4>{name}</h4>
                <h5>{email}</h5>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostComment;
