import ProjectCard from "./components/project_card"

function Projects() {
    const projectData = [
        {
            title: "Atelier Mandala",
            description: "An all-in-one app to buy workshop tickets, takeaways, store items, and gift cards. Features fast checkout and secure payments.",
            tags: ["Client Project"],
            img: ["image1.jpg"],
            teckStack: ["Flutter", "Firebase", "Stripe"], link: "https://drive.google.com/file/d/1ULQfZGl1Z83-l0eyTJRaTPyl3A4DqD3-/view?usp=drive_link"
        },
        {
            title: "Techghosh Community",
            description: "Developed the community section for the Techghosh study platform and provided ongoing maintenance using Flutter.",
            tags: ["Client Project"],
            img: ["image2.jpg"], teckStack: ["Flutter", "Firebase", "Razorpay", "Api"], link: "https://techghosh-study.web.app/"
        },
        {
            title: "Techghosh Admin Panel",
            description: "Built an admin panel for managing the Techghosh coding platform efficiently.",
            tags: ["Client Project", "Confidential"],
            img: ["image3.jpg"], teckStack: ["Flutter", "Firebase", "AWS", "Api"], link: ""
        },
        {
            title: "Merchant Admin Panel",
            description: "Created an intuitive merchant admin panel to streamline business operations.admin panel for managing the Techghosh coding platform efficiently",
            tags: ["Client Project", "Confidential"],
            img: ["image4.jpg"], teckStack: ["Flutter", "Firebase", "Api"], link: ""
        },
        {
            title: "Starclubs Gambling App",
            description: "Developed a gambling app named Starclubs with seamless gameplay and user-friendly features.",
            tags: ["Client Project"],
            img: ["image5.jpg"], teckStack: ["Flutter", "Firebase", "Custom Gateway", "SQL", "PHP"], link: "https://starclubs.in/"
        },
        {
            title: "Ecorides",
            description: "Designed the UI for Ecorides, an EV rental app where users can rent bikes, deliver food, and perform tasks.",
            tags: ["Startup"],
            img: ["image6.jpg"], teckStack: ["Flutter"], link: ""
        },
        {
            title: "QR Scanner & Generator",
            description: "A QR and barcode scanner app with offline capabilities, supporting contact and UPI payment QR generation.",
            tags: ["Pet Project"],
            img: ["image7.jpg"], teckStack: ["Flutter"], link: "https://drive.google.com/file/d/1UMXBkAd-85Bstk8z8TwUxSVhz45gGrXO/view?usp=drive_link"
        },
        {
            title: "First Portfolio Using React.js",
            description: "A personal portfolio website built using React.js, showcasing my projects, skills, and achievements.",
            tags: ["Pet Project"],
            img: ["image1.jpg"],
            techStack: ["React.js", "JavaScript", "HTML", "CSS"], link: "https://hello"
        },
        {
            title: "TechGhosh Landing Page ",
            description: "A landing page created with React.js and Firebase integration for dynamic content management and real-time updates.",
            tags: ["Professional Project"],
            img: ["image2.jpg"],
            techStack: ["React.js", "Firebase", "CSS"], link: "https://techghosh.com/"
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <span className="text-white font-medium text-md">Latest Works</span>
            <div>
                <span className="text-white font-normal text-2xl">Explore My Popular </span>
                <span className="text-[#FF014F] font-normal text-2xl">Projects</span>
            </div>
            <div className="w-full md:px-20">
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        projectData.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                    img={project.img}
                                    techStack={project.teckStack}
                                    link={project.link}
                                />
                            );
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Projects