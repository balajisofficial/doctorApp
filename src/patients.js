import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, TextField } from 'react-admin';

export const PatientList = props => {
    return (
        <List title="All users" {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="firstName" />
                    <TextField source="venueDetails" />
                    <TextField source="availablity" />
                    <TextField source="bookingStatus" />
                </Datagrid>
        </List>
    );
};
