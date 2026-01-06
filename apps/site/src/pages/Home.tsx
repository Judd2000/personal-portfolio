import image from '../assets/1704723293673.jpeg';
import famImage from '../assets/542075630_10239038600093349_7373976164178949728_n.jpeg';
const Home = () => {

    const welcomeContent = <>
        <b><i>Hi!</i></b><br/>
        I'm Nathaniel Judd. I am a full-stack software engineer who loves writing code and
        learning new things. I have written production code through the whole stack, from frontend
        development with React and Angular, to the backend with Nest.js, Express and Hono, and database
        solutions with PostgreSQL and PL/SQL. I have deployed these applications to cloud services
        using CI/CD tools like GitHub Actions and Azure DevOps.
        <br />
        <br />
        <br />
        <b>Education:</b>
        <br />
        I graduated from Brigham Young University with a BS in Computer Science with an emphasis on Software
        Engineering in April of 2024. During my time at BYU, I completed coursework in data structures, algorithms,
        databases, principles of software design and architecture, unit testing, low-level programming, and more.
        <br /> <br />
        During my capstone project, I worked in a team of 4 with a product manager (a developer at Adobe)
        to implement animations for an internal Adobe charts library. Working in sprints and an Agile environment,
        we were able to deliver a functional product that was integrated into Adobe's codebase.
    </>;

    const aboutContent = <>
        <b>About Me:</b>
        <br />
        I am the oldest of 4 children. As you can see, I am a lone Blonde in a sea of Red.
        <br />
        I grew up in the Pacific Northwest, briefly spending time
        in Utah for my degree. We love the weather Washington has to offer and the beautiful outdoors.
        I love my wife, Katie. We were married in the summer of 2023.

        <br />
        I love all things tech - video games, media and TV, and building computers, and of course,
        coding! I love to learn in my free time, be it facts about animals, space or technology.
        I pick things up quickly and am driven to succeed.
    </>;

    const openForWorkContent = <>
        <b><i>I am open for work!</i></b>  I am interested in developing in many different
        programming languages, frameworks and environments. I am also interested in CI/CD positions
        and dev ops roles. If you would like to contact me about opportunities, please use the "Send a Message"
        feature to email me, or see the Contact Me section in the bottom footer.
    </>;

    return (
        <div>
            <span className="text-4xl w-full text-center block py-4 font-bold text-gray-800">HOME</span>
            <div className="flex flex-col space-y-12 items-center overflow-auto">
                <div className="flex flex-col sm:flex-row mx-4 sm:mx-16 sm:space-x-8 items-center">
                    <img src={image} alt="picture of Nathaniel Judd"
                         className="rounded-full w-1/3 md:w-1/4"
                    />
                    <span className="h-full bg-gray-800 text-lg sm:text-xl rounded-lg p-2 mt-8">
                        { welcomeContent }
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-8 items-center mx-4 sm:mx-16">
                    <img src={famImage} alt="picture of Nathaniel Judd with family"
                         className="rounded-lg w-1/2 sm:w-1/4 h-fit"
                    />
                    <span className="h-full bg-gray-800 text-lg sm:text-xl rounded-lg p-2 mt-8">
                        { aboutContent }
                    </span>
                </div>
                <span className="h-full bg-gray-800 text-lg sm:text-xl rounded-lg p-2 mt-8 mx-4 sm:mx-16">
                    { openForWorkContent }
                </span>
            </div>
        </div>
    )
};

export default Home;