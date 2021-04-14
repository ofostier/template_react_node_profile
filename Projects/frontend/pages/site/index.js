import { useRouter } from 'next/dist/client/router';
//import Pagination from '../../components/Pagination';
import Site from '../../components/Site';

/* eslint-disable prettier/prettier */
export default function SitePage() {
    const { query } = useRouter();
    const page = parseInt(query.page);

    return (
        <div>
            <Site page={page || 1}/>
        </div>
    )
}