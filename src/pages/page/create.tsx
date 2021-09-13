import React, {useState} from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Box, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {Project} from '@prisma/client';
import {Prisma} from "../../components/Prisma";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);
export default function Create({projects}: { projects: Project[] }) {
    const classes = useStyles();
    const [newPageName, setNewPageName] = useState<string>("");
    const [newPageDescription, setNewPageDescription] = useState<string>("");
    const [projectId, setProjectId] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setProjectId(event.target.value as string);
    };
    const createNewPage = async (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await axios.post('/api/pages', {
            name: newPageName,
            description: newPageDescription,
            projectId: projectId
        }).then(e => console.log('success')).catch(e => console.log('Error' + e))
    }

    return (
        <form noValidate autoComplete="off">
            <Box>
                <TextField id="new_page_name"
                           label="Standard"
                           onChange={e => setNewPageName(e.currentTarget.value.toString())}
                />
            </Box>
            <Box>
                <TextField id="new_page_description"
                           label="Standard"
                           onChange={e => setNewPageDescription(e.currentTarget.value.toString())}
                />
            </Box>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={projectId}
                    onChange={handleChange}
                >
                    {
                        projects.map((i, k) => {
                            return <MenuItem value={i.id} key={k}>{i.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <Box>
                <Button variant="contained"
                        color="primary"
                        onClick={e => createNewPage(e)}>
                    Create New Page
                </Button>
                v
            </Box>
        </form>
    )
}

export async function getServerSideProps() {
    const projects = await Prisma.prismaClient().project.findMany()
    return {
        props: {projects: projects}
    }
}