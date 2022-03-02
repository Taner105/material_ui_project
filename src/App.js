import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Add from './components/Add';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';

import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  lefbar: {
    [theme.breakpoints.down('sm')]: {

    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar className={classes.lefbar} />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;