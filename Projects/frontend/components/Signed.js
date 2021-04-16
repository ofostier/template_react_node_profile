import { useUser } from "./User";
import Account from './Account';

export default function PleaseSignIn({ children }) {
  const me = useUser();
  if (me) return <Account />
  return children;

}