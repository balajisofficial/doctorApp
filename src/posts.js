import * as React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    DateField,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    SaveButton
} from 'react-admin';


const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="User" reference="patientBookings" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

    const handleSubmit = (id) => {
        let url = "https://convenientdubai.azurewebsites.net/patientBooking?";
        let data = "bookingId=6151e770e7d51f661835f717&bookingsStatus=CONSULTED";
        url=url+data;
        console.log("submit "+id);
        fetch(url,{
            method:'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(id)
        }).then((result)=>{
            alert('Your request approved'); 
            result.json().then((res)=>{
                console.warn('res',res)
            })
        })
    }

    const handleReject = (id) => {
        let url = "https://convenientdubai.azurewebsites.net/patientBooking?";
        let data = id;
        url=url+data;
        console.log("submit "+id);
        fetch(url,{
            method:'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            alert('Your request rejected'); 
            result.json().then((res)=>{
                console.warn('res',res)
            })
        })
    }

    
export const PostList = props => (
    <List {...props} filters={postFilters}>
        <Datagrid>
            <TextField label="PATIENT ID" source="id" />    
            <TextField source="firstName" label="FIRST NAME" />
            <TextField source="lastName" />
            <TextField label="Insurance Policy Number" source="insurancePolicyNo" />
            <TextField label="Insurance Policy Number" source="insurancePolicyNo" />
            <EditButton  label="Click to Review" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title="Add Prescription" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="User" source="id" reference="patientBookings">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
            <TextInput source="contactNumber"  reference="patientBookings" />
            <TextInput source="" multiline source="prescriptionDetails" />
            <TextInput source="bookingStatus" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);