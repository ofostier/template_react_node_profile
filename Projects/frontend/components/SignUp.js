import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $firstname: String!
    $phone: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, firstname: $firstname,phone: $phone, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    firstname: '',
    phone: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    // console.log(inputs);
    const res = await signup().catch(console.error);
    // console.log(res);
    // console.log({ data, loading, error });
    
    // resetForm();
    // Send the email and password to the graphqlAPI
  }
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up For An Account</h2>
      <Error error={error} />
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
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up!</button>
      </fieldset>
    </Form>
  );
}
