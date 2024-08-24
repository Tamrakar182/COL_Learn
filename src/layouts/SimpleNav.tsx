import { useEffect } from 'react'
import scrollTop from '@/utils/scrollTop'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Logo } from '@/assets';

const SimpleNavbar = () => {
    return (
        <nav className="bg-black sticky top-0 z-50">
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex flex-row items-center gap-4'>
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                        <img
                            src={Logo.MainLogoIconWhite}
                            alt="Logo"
                            className="hidden xl:block h-12 w-12"
                        />
                        <img
                            src={Logo.MainLogoIconWhite}
                            alt="Logo"
                            className="xl:hidden h-12 w-12"
                        />
                    </Link>
                </div>
            </div>
        </nav >
    );
};


function SimpleNav() {
    const location = useLocation();

    useEffect(() => scrollTop(), [location]);

    return (
        <>
            <SimpleNavbar />
            <Outlet />
        </>
    )
}

export default SimpleNav