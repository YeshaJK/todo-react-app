import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
    name: string;
}
export const Profile: FC<IProfile> = (props,): ReactElement => {

    //Destructure props
    const {name = 'John'} = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: 2 }}
    >
      {/* Avatar with Initial */}
      <Avatar
        sx={{
          width: 96,
          height: 96,
          backgroundColor: 'primary.main',
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>

      {/* Welcome Message */}
      <Typography variant="h6" color="text.primary">
       {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ textAlign: 'center', marginTop: 1 }}>
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};


Profile.propTypes = {
    name: PropTypes.string.isRequired,
}