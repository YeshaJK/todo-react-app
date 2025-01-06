import React, { FC, ReactElement } from 'react';
import { Typography, Box, Stack } from '@mui/material';

import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';

export const CreateTaskForm: FC = (): ReactElement => {
    return(
        <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        px={4}
        my={6}
        >
        <Typography mb={2} component="h2" variant="h6"> Create a Task

        </Typography>
        <Stack sx={{ width: '100%' }} spacing={2}>
            <TaskTitleField />
            <TaskDescriptionField />
            <TaskDateField />

            <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
                <TaskSelectField />
                <TaskSelectField />
            </Stack>
        </Stack>
        
        </Box>
    );
};