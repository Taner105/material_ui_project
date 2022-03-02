import { Button, Container, Fab, Modal, TextField, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 10,
        right: 10,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vh',
        },
        item: {
            marginTop: 10,
        },
    },
}));

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title="Add" aira-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standart-basic" label="Title" size='small' fullWidth />
                        </div>
                        <div className={classes.item}>
                            <TextField id="standart-basic" label="Description" size='small' fullWidth />
                        </div>
                        <div>
                            <TextField
                                id="standard-multiline-static"
                                label="Tell Your Story"
                                multiline
                                rows={4}

                                className={classes.item}
                                // defaultValue="Default Value"
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
                        </div>

                    </form>
                </Container>
            </Modal>

        </>
    );
}
export default Add;