import React, { FC, ReactElement } from 'react';
import { Grid, Typography, Box} from '@mui/material';

export const TaskArea: FC = (): ReactElement => {
    return (
          <Grid item md={8} px={4}>
            <Box>
              <Typography variant="h2">
                Content Area
              </Typography>
            </Box>
          </Grid>          
    );
};