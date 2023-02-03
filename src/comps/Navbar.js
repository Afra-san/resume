import logo from '../assets/afra-2-04-04.svg';
import navicon from '../assets/4-05.svg';         


export default function Navbar() {
  return (
    <div className="bg-[#F5F5F4] w-full h-16 flex justify-between flex-row-reverse px-4">
        <img className='w-16 cursor-pointer' src={logo} alt='logo' />
        <img className='w-6 cursor-pointer' src={navicon} alt='navicon' />
    </div>
  )
}
