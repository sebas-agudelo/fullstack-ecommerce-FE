import { Link } from 'react-router-dom';
import { Signuot } from '../../components/Signout';

export default function Profile() {
  return (
    <div className="pt-[77px] md:pt-0">
      <div className='px-3'>
        <h1 className='text-2xl font-normal mt-5 mb-10'>Mitt konto</h1>
        <Link to={'/beställningar'} className='lg:hover:text-purple-800'>Mina beställningar</Link>
      </div>

      <Signuot />
    </div>
  );
}
