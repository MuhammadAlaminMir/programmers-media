import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 100,
        margin: 10,
        height: 220,

        position: 'relative',
    },

    title: {
        fontSize: 18,
        fontWeight: 700,
    },
});

const PostCard = (props) => {
    const { title, id, body } = props.post;

    // console.log(title, id, body);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" component="h5">
                    Post: {id}
                </Typography>

                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>

            {props.children}
        </Card>
    );
};
export default PostCard;
