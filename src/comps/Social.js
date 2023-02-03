import github from '../assets/github.svg';
import insta from '../assets/insta.svg';
import dribbble from '../assets/dribbble.svg';
import twitter from '../assets/twitter.svg';

export default function Social() {
  return (
    <div className="w-full h-24 bg-stone-200 flex items-center justify-center">
        <a href='https://github.com/afra-san' target='_blank' rel='noreferrer'><img className='w-7 mx-8 icon sm:w-8 sm:mx-20' src={github} alt='github' /></a>
        <a href='https://instagram.com/afra.self' target='_blank' rel='noreferrer'><img className='w-7 mx-8 icon sm:w-8 sm:mx-20' src={insta} alt='insta' /></a>
        <a href='https://dribbble.com' target='_blank' rel='noreferrer'><img className='w-7 mx-8 icon sm:w-8 sm:mx-20' src={dribbble} alt='dribbble' /></a>
        <a href='https://twiiter.com' target='_blank' rel='noreferrer'><img className='w-7 mx-8 icon sm:w-8 sm:mx-20' src={twitter} alt='twitter' /></a>
    </div>
  )
}
