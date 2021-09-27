import * as React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ApproveIcon from '@material-ui/icons/WorkOutlined';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { PatientList } from './patients';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const App = () => (
    <Admin
        dataProvider={jsonServerProvider(
            'https://convenientdubai.azurewebsites.net'
        )}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="pendingPatientBooking"
            icon={PostIcon}
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
        />
        <Resource name="pendingPatientBooking" options={{ label: 'Pending Approvals' }} icon={UserIcon} list={UserList} className='mainMenu' />
        <Resource name="patientBookings" options={{ label: 'Patient Bookings' }} icon={ApproveIcon} list={PatientList} className='mainMenu' edit={PostEdit} />
    </Admin>
);
export default App;