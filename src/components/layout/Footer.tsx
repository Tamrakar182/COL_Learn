const Footer = () => {
    return (
        <footer className="text-black">
            <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className='flex flex-row lg:justify-between justify-center'>
                    <h1 className='text-center'>Made with ❤️ in KTM © 2024 <span className="cursor-pointer">COL Global</span></h1>
                    <div className='hidden flex-row gap-2 lg:flex'>
                        <a href="#" className='underline-animation'>Contact Us</a> |
                        <a href="#" className='underline-animation'>Privacy Policy</a> |
                        <a href="#" className='underline-animation'>Copyright</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
