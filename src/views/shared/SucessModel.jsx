import React from 'react';
import {
    Modal,
    Grid,
    Typography,
    Button,
    makeStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    modal: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        justifyContent: 'center',
        padding: '20px 40px',
    },
    closeConatiner: {
        alignSelf: 'flex-end',
        cursor : 'pointer',
    },
    contentContainer: {
        justifyContent: 'center',
        padding: '20px 0px 40px',
    },
    buttonContainerWrapperr: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    primaryButton: {
        background: theme.palette.module.backgroundLight,
        color: theme.palette.common.white,
        marginLeft : '2rem',
        padding: '6px 15px',
        "&:hover": {
            background: theme.palette.module.backgroundLight,
        },
    },
    secondaryButton: {
        background: theme.palette.common.white,
        border: "1px solid " + theme.palette.module.backgroundLight,
        color: theme.palette.module.backgroundLight,
        padding: '6px 15px',
    }
}))

function SucessModel(props) {
    const classes = useStyles();
    return (
        <Modal
            open={props.open}
            className={classes.modal}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Grid container className={classes.container}>
                <Grid
                    item
                    className={classes.closeConatiner}
                    onClick={props.handleClose}
                >
                    <CloseIcon className={classes.closeIcon} />
                </Grid>
                <Grid item className={classes.contentContainer}>
                    <Typography>{props.content}</Typography>
                </Grid>
                <Grid container className={classes.buttonContainerWrapperr}>
                    <Grid item className={classes.buttonContainer}>
                        <Button type='button' onClick={props.handleClose} className={classes.secondaryButton}>
                            Cancel
                        </Button>
                        <Button onClick={props.onSubmit} className={classes.primaryButton}>
                            Ok
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
}

export default SucessModel;