import { Outlet } from 'react-router-dom';
import linkedInIcon from '../assets/LinkedIn_icon.svg';
import { useState } from "react";
import SendMessage from "./SendMessage";
import { toast, ToastContainer, Slide } from "react-toastify";

const throttleTime = 2500;

const Layout = () => {

    const [showMessage, setShowMessage] = useState(false);


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
        <div className="min-h-screen bg-linear-to-t from-gray-600 to-gray-200 flex flex-col">
            <nav className="bg-gray-800 flex justify-between items-stretch px-2 py-4">
                <a href="/" className="text-4xl h-full">Nathaniel Judd</a>
                <ul className="p-0 m-0 flex gap-4 text-2xl">
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
            {showMessage && (
                <SendMessage
                    setShowModal={setShowMessage}
                    onMessageSuccess={onMessageSuccess}
                    onMessageFailure={onMessageFailure}
                    onMessageDisabled={onMessageDisabled}
                    throttleTime={throttleTime}
                />
            )}
            <Outlet/>

            <ToastContainer position="bottom-right" transition={Slide} autoClose={2000}/>

            <footer
                className="bg-gray-800 text-gray-200 py-4 mt-10 flex justify-between items-center px-16 bottom-0 w-full">
                <span></span>
                <span>© 2025 Nathaniel Judd. All rights reserved.</span>
                <span className="text-md">
                Contact Me:
                <br/>
                <div className="flex flex-row space-x-4 items-center">
                    <a href="mailto:njudd.mail@gmail.com" className="hover:underline">Email</a>
                    <a href="https://www.linkedin.com/in/nathaniel-judd-573a152a8/" target="_blank"><img
                        src={linkedInIcon} className="w-4 hover:brightness-150" alt="LinkedIn Icon"/></a>
                </div>
            </span>
            </footer>
        </div>
    );
};

export default Layout;