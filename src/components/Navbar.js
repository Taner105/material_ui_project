import { AppBar, Badge, Container, InputBase, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, alpha } from '@material-ui/core/styles';
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import Mail from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import profil from "../images/profil.jpg";

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    input: {
        color: " white",
        marginLeft: theme.spacing(1),
    },
    icons: {
        display: 'flex',
        alignItems: 'center',

    },
    badge: {
        marginRight: theme.spacing(2),
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div >
            <AppBar position='fixed'>
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" className={classes.logoLg}>
                        TnR/DeSİgN
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        LOGO
                    </Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder='Search...' className={classes.input} />
                    </div>
                    <div className={classes.icons}>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Remy Sharp" src={profil} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;