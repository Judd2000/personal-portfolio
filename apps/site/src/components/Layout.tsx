import {Outlet, useNavigate} from 'react-router-dom';
import linkedInIcon from '../assets/LinkedIn_icon.svg';
import { useState, MouseEvent } from "react";
import SendMessage from "./SendMessage";
import { toast, ToastContainer, Slide } from "react-toastify";
import {Size, useScreenSize} from "../hooks/useScreenSize";
// import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const throttleTime = 2500;

const Layout = () => {

    const navigate = useNavigate();

    const routes: { name: string, onClick: () => void }[] = [
        { name: 'Experience', onClick: () => navigate('/experience') },
        { name: 'Projects', onClick: () => navigate('/projects') },
        { name: 'Send Message', onClick: () => setShowMessage(true) }
    ];

    const [showMessage, setShowMessage] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownAnchorEl, setDropdownAnchorEl] = useState<null | HTMLElement>(null);

    const handleHamburgerClick = (event: MouseEvent<HTMLButtonElement>) => {
        const nav = event.currentTarget.closest('nav');
        setDropdownAnchorEl(nav);
        setShowDropdown(true);
    };

    // Used in conjunction with md: and sm: selectors in the styling.
    const screenSize = useScreenSize();


    const onMessageSuccess = () => {
        toast.success("Message successfully sent!");
    }

    const onMessageFailure = () => {
        toast.error("Failed to send message. Sorry for the inconvenience.");
    }

    const onMessageDisabled = () => {
        toast.error("This feature has been temporarily disabled.");
    }

    return (
        <div
            className="min-h-screen bg-linear-to-t from-gray-600 to-gray-200 flex flex-col overflow-x-none min-w-fit max-w-screen">
            <nav className="bg-gray-800 flex justify-between items-stretch px-2 py-4">
                <a href="/" className="text-2xl sm:text-4xl h-full">Nathaniel Judd</a>
                { screenSize <= Size.sm && (
                        <button
                            className="active:bg-gray-600 px-4 rounded-md"
                            onClick={handleHamburgerClick}
                        >
                            {/*<LunchDiningIcon />*/}
                            { showDropdown ? <MenuOpenIcon /> : <MenuIcon /> }
                        </button>
                )}
                <ul className="p-0 m-0 hidden sm:flex flex-row gap-4 sm:text-2xl">
                    <li className=" active:bg-gray-700 hover:bg-gray-600 hover:rounded-xl hover:cursor-pointer">
                        <a href="/experience" className="h-full flex items-center p-1">Experience</a>
                    </li>
                    <li className="active:bg-gray-700 hover:bg-gray-600 hover:rounded-xl hover:cursor-pointer">
                        <a href="/projects" className="h-full flex items-center p-1">Projects</a>
                    </li>
                    <li className="active:bg-gray-700 hover:bg-gray-600 hover:rounded-xl hover:cursor-pointer"
                        onClick={() => setShowMessage(true)}>
                        <span className="h-full flex items-center p-1">Send Message</span>
                    </li>
                </ul>
            </nav>
            <Menu
                id="basic-menu"
                anchorEl={dropdownAnchorEl}
                open={showDropdown}
                onClose={() => setShowDropdown(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                { routes.map((route) => (
                    <MenuItem onClick={() => {
                        setShowDropdown(false);
                        route.onClick();
                    }} >{ route.name }</MenuItem>
                ))}
            </Menu>
            {showMessage && (
                <SendMessage
                    setShowModal={setShowMessage}
                    onMessageSuccess={onMessageSuccess}
                    onMessageFailure={onMessageFailure}
                    onMessageDisabled={onMessageDisabled}
                    throttleTime={throttleTime}
                />
            )}
            <div className="flex-grow">
                <Outlet/>
            </div>

            <ToastContainer position="bottom-right" transition={Slide} autoClose={throttleTime}/>

            <footer
                className="bg-gray-800 text-gray-200 py-4 mt-10 flex justify-between items-center gap-4 px-2 sm:px-10 bottom-0 w-full"
            >
                <span className="text-sm sm:text-md">© 2025 Nathaniel Judd. All rights reserved.</span>
                <span className="text-sm sm:text-md">
                Contact Me:
                <br/>
                <div className="flex flex-row space-x-4 items-center">
                    <a href="mailto:njudd.mail@gmail.com" className="hover:underline active:underline">Email</a>
                    <a href="https://www.linkedin.com/in/nathaniel-judd-573a152a8/" target="_blank"><img
                        src={linkedInIcon} className="w-4 hover:brightness-150" alt="LinkedIn Icon"/></a>
                </div>
            </span>
            </footer>
        </div>
    );
};

export default Layout;