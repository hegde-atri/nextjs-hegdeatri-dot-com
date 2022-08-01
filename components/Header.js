import Link from 'next/link'
import Image from 'next/image'
import {useTheme} from "next-themes";
import {SunIcon, MoonIcon} from '@heroicons/react/solid'

export default function Header() {
  const {systemTheme , theme, setTheme} = useTheme ();

  const renderThemeChanger= () => {

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-6 h-6 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
    }
  };

  return (
    <header className='bg-indigo-900 text-violet-300 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' width={40} height={40} alt='logo'/>
            <span className="ml-3 text-2xl">Atri Hegde</span>
            </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/posts'><a className='mx-5 cursor-pointer hover:text-violet-50'>Posts</a></Link>
          <Link href='/projects'><a className='mx-5 cursor-pointer hover:text-violet-50'>Projects</a></Link>
          <Link href='/about'><a className='mx-5 cursor-pointer hover:text-violet-50'>About</a></Link>
          {renderThemeChanger()}
        </nav>
      </div>
    </header>
  )
}
