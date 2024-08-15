import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { Logo } from '@/assets';
import { Button } from "@/components/ui/button";
import CoursesDropdown from './components/CoursesDropdown';
import TestsDropdown from './components/TestsDropdown';

const Navbar = () => {
    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex flex-row items-center gap-4'>
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                        <img
                            src={Logo.HMainLogoDark}
                            width={100}
                            height={55}
                            alt="Logo"
                            className="hidden xl:block"
                        />
                        <img
                            src={Logo.MainLogoIconDark}
                            width={50}
                            height={55}
                            alt="Logo"
                            className="xl:hidden"
                        />
                    </Link>
                    <div className="hidden md:inline-block w-0.5 self-stretch bg-slate-100 rounded-full" />
                    <CoursesDropdown />
                    <div className="hidden md:inline-block w-0.5 self-stretch bg-slate-100 rounded-full" />
                    <TestsDropdown />
                </div>
                <div className='hidden md:flex flex-row gap-2 flex-1 mx-4 items-center p-4 bg-slate-100 rounded-xl border-slate-700'>
                    <FaSearch className='w-4 h-4 cursor-pointer' />
                    <input
                        placeholder='What do you want to Learn'
                        className='bg-slate-100 text-black placeholder-lime-950 focus:none focus:outline-none'
                    />
                </div>
                <div className='flex items-center flex-row gap-6'>
                    <FaSearch className='md:hidden w-6 h-6' />
                    <Button variant="outline" className='w-full h-full'>Sign In</Button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
