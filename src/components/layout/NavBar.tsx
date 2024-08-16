import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Logo } from '@/assets';
import { Button } from "@/components/ui/button";
import CoursesDropdown from './components/CoursesDropdown';
import TestsDropdown from './components/TestsDropdown';
import { MobileMenu } from './components/MobileMenu';
import clsx from 'clsx';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const handleSearchClick = () => {
        setIsSearchExpanded(!isSearchExpanded);
    };

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex flex-row items-center gap-4'>
                    {!isSearchExpanded && (
                        <>
                            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                                <img
                                    src={Logo.MainLogo}
                                    alt="Logo"
                                    className="hidden xl:block h-12 w-12"
                                />
                                <img
                                    src={Logo.MainLogo}
                                    alt="Logo"
                                    className="xl:hidden h-12 w-12"
                                />
                            </Link>
                            <div className="hidden md:inline-block w-0.5 self-stretch bg-slate-100 rounded-full" />
                            <CoursesDropdown />
                            <div className="hidden md:inline-block w-0.5 self-stretch bg-slate-100 rounded-full" />
                            <TestsDropdown />
                        </>
                    )}
                </div>
                <div className={clsx('transition-all duration-300 ease-in-out flex-row gap-2 flex-1 mx-4 items-center p-3 bg-slate-100 rounded-xl border-slate-700', {
                    'opacity-0 max-w-0 overflow-hidden': !isSearchExpanded,
                    'opacity-100 max-w-full': isSearchExpanded,
                    'transform translate-y-full': !isSearchExpanded,
                    'transform translate-y-0': isSearchExpanded,
                    "flex": isSearchExpanded,
                })}>
                    <input
                        placeholder='What do you want to Learn'
                        className='bg-slate-100 text-black placeholder-lime-950 focus:none focus:outline-none'
                    />
                </div>
                <div className='flex items-center flex-row gap-6'>
                    {!isSearchExpanded ?
                        <FaSearch
                            onClick={handleSearchClick}
                            className='w-6 md:w-12 md:h-12 h-6 cursor-pointer'
                        /> :
                        <FaXmark
                            onClick={handleSearchClick}
                            className='w-6 md:w-12 md:h-12 h-6 cursor-pointer'
                        />}
                    <Button onClick={() => navigate("/sign-in")} variant="outline" className='hidden md:flex w-full h-full'>Sign In</Button>
                    <MobileMenu />
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
