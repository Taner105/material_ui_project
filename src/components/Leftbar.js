import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        padding: theme.spacing(8),
        paddingTop: 100,
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
        },
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        color: "white",
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7",
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(4),
            cursor: 'pointer',
        },

    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px',
        }
    },
    text: {
        fontWeight: '500',


        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

const Leftbar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>
                    Friends
                </Typography>
            </div>
            <div className={classes.item}>
                <FormatListBulletedIcon className={classes.icon} />
                <Typography className={classes.text}>
                    Lists
                </Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text}>
                    Camera
                </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>
                    Videos
                </Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>
                    Apps
                </Typography>
            </div>
            <div className={classes.item}>
                <CollectionsBookmarkIcon className={classes.icon} />
                <Typography className={classes.text}>
                    Collections
                </Typography>
            </div>
            <div className={classes.item}>
                <StorefrontIcon className={classes.icon} />
                <Typography className={classes.text}>
                    Market Place
                </Typography>
            </div>
            <div className={classes.item}>
                <SettingsIcon className={classes.icon} />
                <Typography className={classes.text}>
                    Settings
                </Typography>
            </div>
            <div className={classes.item}>
                <LogoutIcon className={classes.icon} />
                <Typography className={classes.text}>
                    Logout
                </Typography>
            </div>
        </Container>
    );
}

export default Leftbar;