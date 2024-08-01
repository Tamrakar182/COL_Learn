import Navbar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

interface Props {
    children: React.ReactNode
}

function NavFooter({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default NavFooter