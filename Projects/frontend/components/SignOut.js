import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;
function Test() {
  console.log(toto)
}
// TODO: [TRNP-5] Fix Error when SIGNOUT from ACCOUNT PAGE
// génerating Error with lib/useForm.js

export default function SignOut() {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <button type="button" onClick={signout}>
      Sign Out !
    </button>
  );
}
