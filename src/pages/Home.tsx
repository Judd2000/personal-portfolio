import image from '../assets/1704723293673.jpeg';
import famImage from '../assets/542075630_10239038600093349_7373976164178949728_n.jpg';
const Home = () => {

    return (
        // TODO: create a home page with general information
        <div className="">
            <span className="text-4xl w-full text-center block py-4 font-bold text-gray-800">HOME</span>
            <div className="flex flex-row space-x-10 px-45">
                <div className="flex flex-col space-y-10 items-center">
                    <img src={image} alt="picture of Nathaniel Judd"
                         className="rounded-full w-100 h-fit"
                    />
                    <img src={famImage} alt="picture of Nathaniel Judd with family"
                         className="rounded-lg w-200 h-fit"
                    />
                </div>

                <div className="flex flex-col space-y-8 w-fit">
                    <span className="h-full bg-gray-800 text-xl rounded-lg p-2 mt-8">
                    <b><i>Hi!</i></b><br/>
                    I'm Nathaniel Judd. I am a full-stack software engineer who loves writing code and
                    learning new things. I love following innovative technology and developing clean
                    and functional solutions. I have written production code through the whole stack, from frontend
                    development with React and Angular, to the backend with Nest.js, Express and Hono, and database
                    solutions with PostgreSQL and Oracle SQL. I have deployed these applications to cloud services
                    using CI/CD tools like GitHub Actions and Azure DevOps.

                    <br />
                    <br />
                    <br />
                    <b>Education:</b>
                    <br />
                    I graduated from Brigham Young University with a BS in Computer Science with an emphasis on Software
                    Engineering in April of 2024. During my time at BYU, I completed coursework in data structures, algorithms,
                    databases, principles of software design and architecture, unit testing, low-level programming, and more.
                    </span>
                    <span className="h-full bg-gray-800 text-xl rounded-lg p-2 mt-8">
                        <b>About Me:</b>
                        <br />
                        <br />
                        I am the oldest of 4 children. As you can see, I am a lone Blonde in a sea of Red.
                        <br />
                        I grew up in the Pacific Northwest, briefly spending time
                        in Utah for my degree. We love the weather Washington has to offer and the beautiful outdoors.

                        <br />
                        I love all things tech - video games, media and TV, and building computers, and of course,
                        coding! I love to learn in my free time, be it facts about animals, space or technology.
                        I pick things up quickly and am driven to succeed.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Home;