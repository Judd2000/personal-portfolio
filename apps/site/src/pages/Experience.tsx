import Resume from '../assets/Nathaniel_Judd_Resume.pdf';

const Experience = () => {

    return (
        // TODO: create a home page with general information
        <div className="h-full">
            <div className="flex flex-row items-center gap-10">
                <div className="flex-1"></div>
                <span className="text-2xl sm:text-4xl text-center block py-4 font-bold text-gray-800">Experience</span>
                <div className="flex-1 flex justify-end">
                    <button className="bg-blue-950  text-white p-[6px] sm:p-2 rounded-2xl hover:bg-blue-900 hover:underline active:bg-blue-900 active:underline cursor-pointer mr-4">
                        <a href={Resume} target="_blank" className="text-[10px] sm:text-sm">Download Resume</a>
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Experience;