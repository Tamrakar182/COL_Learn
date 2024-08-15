import Navbar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import { useEffect } from 'react'
import scrollTop from '@/utils/scrollTop'
import { useLocation } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}

function NavFooter({ children }: Props) {
    const location = useLocation();

    useEffect(() => scrollTop(), [location]);

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default NavFooter