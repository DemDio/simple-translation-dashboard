import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Page} from '@prisma/client';
import Link from "next/link";

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
    page :Page
}
/**
 *
 * @param page
 * @constructor
 */
export const PageContainer = ({page}: PageProps) => {
    const classes = useStyles();
    return (
        <Link href={'/page/'+ page.id}>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3">{page.name}</Typography>
            <Typography variant="body1">{page.description}</Typography>
        </Paper>
        </Link>
    );
}

export default PageContainer;