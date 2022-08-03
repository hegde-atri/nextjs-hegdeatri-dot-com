import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { BsSunFill, BsSun } from 'react-icons/bs'

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="w-6 h-6 text-yellow-500 hover:text-yellow-200"
          role="button"
          onClick={() => setTheme("light")}/>
      );
    } else {
      return (
        <BsSunFill
          className="w-6 h-6 text-dark hover:text-dusk"
          role="button"
          onClick={() => setTheme("dark")}/>
      );
    }
  };

  return (
    <header className="bg-slate-200 dark:bg-dusk sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row text-dark dark:text-slate-200">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image className='rounded-lg' src="/images/logo.png" width={40} height={40} alt="logo" quality={100} />
            <span className="ml-3 text-2xl font-black font-['Comfortaa']">Atri Hegde</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/posts">
            <a className="mx-5 cursor-pointer hover:text-blue-700 dark:hover:text-slate-900">Posts</a>
          </Link>
          <Link href="/projects">
            <a className="mx-5 cursor-pointer hover:text-blue-700 dark:hover:text-slate-900">Projects</a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer hover:text-blue-700 dark:hover:text-slate-900">About</a>
          </Link>
          {renderThemeChanger()}
        </nav>
      </div>
    </header>
  );
}