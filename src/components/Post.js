import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 240,
    },
    card: {
        marginBottom: 40,
    },
}));

const Post = ({ post }) => {
    const classes = useStyles();


    return (

        <Card className={classes.card} gutterBottom>
            <CardActionArea>
                <CardMedia
                    image={post.image}
                    title="Contemplative Reptile"
                    className={classes.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        {post.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary'>
                        Share
                    </Button>
                    <Button size='small' color='primary'>
                        Learn More
                    </Button>
                </CardActions>

            </CardActionArea>

        </Card>



    );
}

export default Post;