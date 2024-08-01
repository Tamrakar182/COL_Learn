import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { Logo } from '@/assets';
import Button from '@/components/common/button';

const Navbar = () => {
    return (
        <nav className={`border-gray-200 dark:bg-white-900 sticky top-0 z-50`}>
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex flex-row gap-4'>
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                        <img
                            src={Logo.HMainLogoDark}
                            width={100}
                            height={55}
                            alt="Logo"
                            className="hidden xl:block"
                        />
                        <img
                            src={Logo.MainLogoIconWhite}
                            width={50}
                            height={55}
                            alt="Logo"
                            className="xl:hidden"
                        />
                    </Link>
                    <div className="inline-block w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />
                    <div className='flex flex-row gap-2 items-center'>
                        <CiGrid41 className='w-10 h-10' />
                        <p className='text-lg'>Courses</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center p-4 bg-slate-400 rounded-xl border-slate-700'>
                    <FaSearch className='w-4 h-4' />
                    <input
                        placeholder='What do you want to Learn...'
                        className='bg-slate-400 text-black placeholder-lime-950 focus:none focus:outline-none'

                    />
                </div>
                <div>
                    <Button>Sign In</Button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
