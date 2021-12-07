import icon from '../assets/rain.png';

const Navbar = () => {
  return (
    <div className='sticky top-0 w-full shadow-md p-4 flex items-center bg-blue-100'>
      <h3 className=' font-bold text-2xl'>Compreweather</h3>{' '}
      <img src={icon} alt='icon' className='h-10 w-10' />
    </div>
  );
};

export default Navbar;
