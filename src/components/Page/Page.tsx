import {PageType} from '../../types'
import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);
type PageProps = {
    page : PageType
}
/**
 *
 * @param page
 * @constructor
 */
export const Page = ({page}: PageProps) => {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3">{page.name}</Typography>
            <Typography variant="body1">{page.description}</Typography>
        </Paper>
    );
}