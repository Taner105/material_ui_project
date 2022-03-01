import { AppBar, Container, InputBase, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    search: {
        display: 'flex',
        alignItems: 'center',
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
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div >
            <AppBar>
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" className={classes.logoLg}>
                        TnR/DeSİgN
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        LOGO
                    </Typography>
                    <div className={classes.search}>
                        <Search className={classes.search} />
                        <InputBase placeholder='Search...' />
                    </div>
                    icons
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;