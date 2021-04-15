import Account from "../components/Account";
import PleaseSignIn from '../components/PleaseSignIn';

export default function AccountPage() {
  return (
    <div>
      <PleaseSignIn>
        <Account></Account>
      </PleaseSignIn>
    </div>
  )
}