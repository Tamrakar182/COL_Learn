import Navbar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import { useEffect } from 'react'
import scrollTop from '@/utils/scrollTop'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function NavFooter() {
    const location = useLocation();

    useEffect(() => scrollTop(), [location]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default NavFooter