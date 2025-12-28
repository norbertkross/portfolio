import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center px-2 pt-16 md:px-24'>
      <div className='mb-6 flex items-center justify-center gap-6'>
        <a href="https://gh.linkedin.com/in/norbert-aberor-a75996162" target="_blank" rel="noopener noreferrer" className='text-3xl hover:text-blue-600 transition-colors'><FaLinkedin/></a>
        <a href="https://x.com/norbertaberor" target="_blank" rel="noopener noreferrer" className='text-3xl hover:text-gray-800 transition-colors'><FaX/></a>
        <a href="https://www.youtube.com/@codeishdev" target="_blank" rel="noopener noreferrer" className='text-3xl hover:text-red-600 transition-colors'><FaYoutube/></a>
      </div>

      <div className='mb-14 flex flex-col gap-4 p-6 text-center text-[18px]'>
      <div className='flex flex-col md:flex-row md:gap-6 justify-center items-center gap-2'>
        </div>
        <p>All rights reserved. Norbert Aberor &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
