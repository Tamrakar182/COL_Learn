import { useEffect, useState } from 'react';
import Container from "@/components/common/container";

const NotFoundPage = () => {
    const [contentHeight, setContentHeight] = useState('100vh');

    useEffect(() => {
        const updateContentHeight = () => {
            const navbar = document.querySelector('nav');
            const footer = document.querySelector('footer');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const footerHeight = footer ? footer.offsetHeight : 0;
            const newHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
            setContentHeight(newHeight);
        };

        updateContentHeight();

        window.addEventListener('resize', updateContentHeight);

        return () => window.removeEventListener('resize', updateContentHeight);
    }, []);

    return (
        <div className="border-gray-200 dark:bg-white-900 top-0">
            <Container>
                <div style={{ minHeight: contentHeight }} className="items-center justify-center flex">
                    Not Found
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;