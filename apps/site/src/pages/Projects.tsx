import PortfolioPageCode from '../assets/PortfolioPage_Code.png';

const Projects = () => {

    return (
        <div className="h-full">
            <span className="text-2xl sm:text-4xl text-center block py-4 font-bold text-gray-800">Personal Projects</span>
            <ul className="list-disc px-4">
                <li className="flex flex-col">
                    <span className="font-bold text-gray-800 text-xl sm:text-2xl">Portfolio Page (You Are Here!):</span>
                    <span className="text-gray-700 text-md sm:text-lg">
                        Web application built using Rsbuild React.js, using Tailwind CSS and a Hono backend.
                        <br />
                        Hosted on AWS using S3, Lambda, Cloudfront & API Gateway
                        <br />
                        Automatically deployed with Terraform IaC and Azure DevOps Pipelines
                    </span>
                    <span className="font-bold text-md sm:text-lg text-gray-700">
                        See the code
                        <a href="https://github.com/Judd2000/personal-portfolio.git" target="_blank" className="underline">HERE</a>
                        (GitHub)
                    </span>
                    <img src={PortfolioPageCode} className="w-full sm:w-1/2" />
                </li>
            </ul>
        </div>
    )
};

export default Projects;