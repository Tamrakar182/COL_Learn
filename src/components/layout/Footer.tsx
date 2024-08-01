import { FaDiscord, FaFacebookF, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import { Logo } from "@/assets"

const sections = [
    {
        title: 'Quick Links',
        links: [
            { text: 'Home', href: '/' },
            { text: 'Courses', href: '/' },
            { text: 'About Us', href: '/' }
        ]
    },
    {
        title: 'Community',
        links: [
            { text: 'Educational Forums', href: '/' },
            { text: 'Resources', href: '/' },
            { text: 'Learner Stories', href: '/' }
        ]
    },
    {
        title: 'Explore our Courses',
        links: [
            { text: 'IELTS Preparation', href: '/' },
            { text: 'PTE Preparation', href: '/' },
            { text: 'Loksewa Preparation', href: '/' }
        ]
    }
];

const Footer = () => {
    return (
        <footer className="text-white bg-black/80 dark:bg-black/80">
            <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                <div className="md:grid content-center md:grid-cols-12 md:gap-12">
                    <div className="col-span-6 justify-center md:col-span-4 mb-6 md:mb-0">
                        <Link to="/" className="flex items-center mb-5">
                            <img src={Logo.HMainLogoWhite} className="h-20" alt="Logo" />
                        </Link>
                        <div className="sm:flex sm:items-center self-center sm:justify-between">
                            <div className="flex mt-4 sm:justify-center sm:mt-0">
                                <a href="#" className="text-gray-500 hover dark:hover:text-white">
                                    <FaFacebookF className="w-4 h-4" />
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                                    <FaDiscord className="w-4 h-4" />
                                    <span className="sr-only">Discord community</span>
                                </a>
                                <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                                    <FaXTwitter className="w-4 h-4" />
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                                    <FaGithub className="w-4 h-4" />
                                    <span className="sr-only">GitHub account</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-6 md:col-span-8 grid grid-cols-1 mx-2 gap-2 sm:gap-6 sm:grid-cols-3">
                        {sections.map((section, index) => (
                            <div className='flex flex-col' key={index}>
                                <h2 className="mb-4 text-xl font-semibold uppercase">{section.title}</h2>
                                <ul className="font-medium">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="mb-4">
                                            <a href={link.href} className="hover:underline">{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className='flex flex-row lg:justify-between justify-center'>
                    <div className='hidden flex-row gap-2 lg:flex'>
                        <a href="#" className='hover:text-slate-400'>Privacy Policy</a> |
                        <a href="#" className='hover:text-slate-400'>Cookies Policy</a> |
                        <a href="#" className='hover:text-slate-400'>Terms & Conditions</a>
                    </div>
                    <h1 className='text-center'>Made with ❤️ in KTM © 2024 COL Global</h1>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
