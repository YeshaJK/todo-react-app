import React, { FC, ReactElement } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from './interfaces/IDateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';

export const TaskDateField: FC<IDateField> = ({
    value = new Date(),
    disabled = false,
    onChange,
}) => {
    
    const handleDateChange = (
        newValue: Date | null,
        context: PickerChangeHandlerContext<any>
    ) => {
        if (onChange) {
            onChange(newValue, context);
        }
    };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={handleDateChange}
          disabled={disabled}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
