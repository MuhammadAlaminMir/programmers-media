import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Axios('https://jsonplaceholder.typicode.com/posts').then((data) =>
            setPosts(data.data)
        );
    }, []);
    // console.log(posts);
    return (
        <div>
            <h3 className="center">Here Are Our All Posts</h3>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {posts.map((post) => (
                    <Grid item lg={4} xl={3} md={6} xm={12} key={post.id}>
                        <PostCard post={post} key={post.id}>
                            <Link to={`/post-detail/${post.id}`}>
                                <CardActions
                                    style={{
                                        margin: 0,
                                        position: 'absolute',
                                        bottom: 0,
                                    }}
                                >
                                    <Button
                                        onClick={() =>
                                            sessionStorage.setItem(
                                                'postId',
                                                post.id
                                            )
                                        }
                                        size="small"
                                        color="secondary"
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Link>
                        </PostCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Posts;
