import Resume from '../assets/Nathaniel_Judd_Resume.pdf';

const Experience = () => {

    return (
        <div className="h-full">
            <div className="flex flex-row items-center gap-10">
                <div className="flex-1"></div>
                <span className="text-2xl sm:text-4xl text-center block py-4 font-bold text-gray-800">Experience</span>
                <div className="flex-1 flex justify-end">
                    <button
                        className="bg-blue-950  text-white p-[4px] sm:p-2 rounded-2xl hover:bg-blue-900 hover:underline active:bg-blue-900 active:underline cursor-pointer mr-4 w-fit">
                        <a href={Resume} className="text-[10px] sm:text-sm">Download Resume</a>
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center mt-5">
                <span className="text-md text-gray-800 font-bold px-4 pb-4">NATHANIEL JUDD: FULL-STACK SOFTWARE DEVELOPER</span>
            </div>
            <hr className="border-gray-700 pb-4 mx-4"/>

            <div className="px-4">
                <span className="text-gray-700">Top Technologies:</span>
                <br/>
                <span className="text-lg text-gray-800 font-bold">TypeScript, JavaScript, Java, Azure DevOps Pipelines,
                    AWS, React.js, Terraform, Git, C#, PostgreSQL
                </span>
            </div>
            <div className="flex flex-col px-5 pt-4">
                <hr className="h-2 border-gray-700"/>
                <span className="text-lg text-gray-700 py-4">WORK EXPERIENCE:</span>
                <hr className="border-gray-700 pb-4"/>
                <span className="text-lg text-gray-700">Contract Full-Stack Developer @ Church of Jesus Christ of Latter-day Saints</span>
                <span className="text-sm text-gray-500">April 2024 - January 2026</span>
                <span className="text-md text-gray-700">
                    Duties:
                    <br/>
                    Worked as a contract full-stack developer for church technology operations, delivering
                    and maintaining a new web and android application for volunteer church missionaries.
                    Performed all CI/CD tasks for the team, creating a streamlined and consistent
                    deployment process.
                </span>
                <span className="text-md text-gray-700 pt-4">Key Projects:</span>
                <ul className="list-disc px-2 text-gray-600 pb-4">
                    <li>
                        Created a robust in-app notification system allowing users to receive reminders about upcoming
                        calendar events (React.js, TypeScript, Express.js, Azure DevOps Pipelines, Amazon EventBridge,
                        AWS Lambda).
                    </li>
                    <li>
                        Upgraded continuous delivery pipelines to run only when relevant code was merged, decreasing
                        pipeline runs by 70%.
                    </li>
                    <li>
                        Authored an Azure pipeline to build, bump version and bundle a native mobile app, send it to
                        testers and sign for production (Azure DevOps Pipelines, Capacitor, Rsbuild, Firebase).
                    </li>
                    <li>
                        Created database migration pipelines across 2 applications, making database changes and schema
                        synchronization seamless across non-production and production lanes.
                    </li>
                    <li>
                        Created new features such as a feedback page supporting file uploads, a rating system for
                        AI-generated support messages for our application, and more (React.js, TypeScript, Express.js,
                        PostgreSQL).
                    </li>
                </ul>
                <hr className="border-gray-700 pb-4"/>
                <span className="text-lg text-gray-700">Senior Student Developer @ Provo MTC</span>
                <span className="text-sm text-gray-500">November 2024 - April 2024</span>
                <span className="text-md text-gray-700">
                    Duties:
                    <br/>
                    Promoted to a senior position after passing a special development test that involved creating an
                    issue tracker web application from scratch to match given criteria in one sprint. Worked on migrating
                    and maintaining existing codebases and fixing bugs on every part of our stack. Reviewed other's code
                    for style, consistency and best practice, mentored other student developers and played an active role in deployment operations.
                </span>
                <span className="text-md text-gray-700 pt-4">Key Projects:</span>
                <ul className="list-disc px-2 text-gray-600 pb-4">
                    <li>
                        Created a jira-like issue tracker as a senior dev test, supporting login, drag-and-drop,
                        comments,
                        and attachments in 2 weeks (Angular, Tailwind CSS, TypeScript, Nest.js, MySQL).
                    </li>
                    <li>
                        Aided an employee management application in its' migration to UTC, creating frontend and backend
                        code to better interface with our PL/SQL database (Angular, TypeScript).
                    </li>
                    <li>
                        Migrated several proprietary Angular components to be more modern and maintainable.
                    </li>
                    <li>
                        Took over regular deployment to production, syncing changes several times a week via Github
                        Actions.
                    </li>
                </ul>
                <hr className="border-gray-700 pb-4"/>
                <span className="text-lg text-gray-700">Student Developer @ Provo MTC</span>
                <span className="text-sm text-gray-500">October 2022 - November 2023</span>
                <span className="text-md text-gray-700">
                    Duties:
                    <br/>
                    Completed new features and maintained an employee web and android application. Full stack development
                    from database to deployment, handling feature creation and bug fixes on every portion of our stack.
                </span>
                <span className="text-md text-gray-700 pt-4">Key Projects:</span>
                <ul className="list-disc px-2 text-gray-600 pb-4">
                    <li>
                        Stood up a new interface for leaders to track weekly volunteer missionary well-being, mental
                        health and overall success (AngularJS, Typescript, NestJS, PL/SQL).
                    </li>
                    <li>
                        Upgraded a volunteer alert page for use at training centers with an interface for editing and
                        multi-language support (AngularJS, TypeScript, NestJS, PL/SQL, AWS).
                    </li>
                </ul>
                <hr className="h-2 border-gray-700"/>
                <span className="text-lg text-gray-700 py-4">EDUCATION:</span>
                <hr className="h-2 border-gray-700 pb-4"/>
                <hr/>
                <span className="text-md text-gray-700">Computer Science (BS) @ Brigham Young University (Emphasis in Software Engineering), Minor in Spanish</span>
                <span className="text-sm text-gray-500">September 2020 - April 2024</span>
                <br/>
                <span className="text-md text-gray-700 font-bold">Capstone Project:</span>
                <span className="text-md text-gray-700 pb-6">
                    Worked in a 4-person team, using SCRUM led by a product manager to add animations to an Adobe graph
                    library (React Spectrum Charts). Used React.js and Typescript to create JSON specs for Vega
                    visualization. Created test cases and wrote unit tests with high levels of coverage.
                    Product manager was a developer at Adobe and our work was integrated into their library after 1 semester.
                </span>
            </div>

        </div>
    )
};

export default Experience;