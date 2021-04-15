import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import Form from "./styles/Form";
import DisplayError from "./ErrorMessage";
import {CURRENT_USER_QUERY, useUser} from "./User";
import useForm from '../lib/useForm';
import PhoneInput from 'react-phone-input-2';
import React, {useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;
const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $email: String!
    $name: String!
    $firstname: String
    $phone: String
    $password: String
  ) {
    updateUser(
      id: $id
      data: { name: $name, firstname: $firstname, phone: $phone, email: $email, password: $password }
    ) {
      id
      name
    }
  }
`;

const createNotification = (type) =>{
  return () => {
    switch (type) {
      case 'info':
        console.log('info notif');
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Informations Saved !');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
    }
  };
}

export default function Account() {

  //NotificationManager.info('Info message');

  const [passwordError, setPasswordError] = useState();

  // 1. We need to get the current user
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);
  // console.log(data.authenticatedItem);

  // 2. We need to get the mutation to update the user
  const [
    updateUser,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_USER_MUTATION);
  
  // 2.5 Create some state for the form inputs:
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.authenticatedItem);
  async function handleSubmit(e) {

    e.preventDefault(); // stop the form from submitting
    //console.log(e);
    //const res = await reset().catch(console.error);
    // console.log(res);
    // console.log({ data, loading, error });
    //resetForm();
    // Send the email and password to the graphqlAPI
    const res = await updateUser({
      variables: {
        id: inputs.id,
        name: inputs.name,
        firstname: inputs.firstname,
        email: inputs.email,
        phone: inputs.phone,
        password: inputs.password,
      },
    }).catch(
      console.error
      );

    if (res) {
      NotificationManager.success('Success message', 'Informattions Saved !');
      setPasswordError({message:"Greaaat !! Informations saved !"});   
    }
    

  }
  

  if (loading) return <p>loading...</p>;
  
  return(
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Your informations</h2>
      <DisplayError error={error || updateError} />
      <fieldset>
        <label htmlFor="text">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="username"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="text">
          FirstName
          <input
            type="text"
            name="firstname"
            placeholder="Your Firstname"
            autoComplete="firstname"
            defaultValue={inputs.firstname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            country={'fr','us'}
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            autoComplete="phone"
            defaultValue={inputs.phone}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            defaultValue={inputs.email}
            onChange={handleChange}
          />
        </label>
        </fieldset>
        <h2>Your Password</h2>
        <fieldset>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            //value={me.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password again
          <input
            type="password"
            name="password2"
            placeholder="Password"
            autoComplete="new-password"
            //value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </fieldset>
      <NotificationContainer></NotificationContainer>
    </Form>
  )
}