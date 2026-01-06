import Resume from '../assets/Nathaniel_Judd_Resume.pdf';

const Experience = () => {

    return (
        // TODO: create a home page with general information
        <div className="h-full">
            <button>
                <a href={Resume} target="_blank">Test Download</a>
            </button>
            <span>Experience</span>
        </div>
    )
};

export default Experience;