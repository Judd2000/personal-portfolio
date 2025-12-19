import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className="min-h-screen bg-linear-to-t from-gray-600 to-gray-200">
        <nav className="bg-gray-800 flex justify-between items-stretch px-2 py-4">
            <a href="/" className="text-4xl h-full">Nathaniel Judd</a>
            <ul className="p-0 m-0 flex gap-4 text-2xl">
                <li className=" active:bg-gray-700 hover:bg-gray-600 hover:rounded-xl ">
                    <a href="/experience" className="h-full flex items-center p-1">Experience</a>
                </li>
                <li className="active:bg-gray-700 hover:bg-gray-600 hover:rounded-xl">
                    <a href="/projects" className="h-full flex items-center p-1">Projects</a>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
    );
};

export default Layout;