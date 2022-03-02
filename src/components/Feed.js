import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(10),
    },
}));
const dummyData = [
    {
        id: 1,
        title: "TANER",
        body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://i4.hurimg.com/i/hurriyet/75/750x422/61a098c44e3fe00bd88aa546.jpg"
    },
    {
        id: 2,
        title: "AYŞE",
        body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/59/1b/doga-kutlu-apart.jpg?w=900&h=-1&s=1"
    },
    {
        id: 3,
        title: "ENES",
        body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg"
    },
];

const Feed = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {
                dummyData.map(post => <Post key={post.id} post={post} />)
            }

        </Container>
    );
}

export default Feed;