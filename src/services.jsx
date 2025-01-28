import PropTypes from 'prop-types';
import Globe from './assets/services/Globe.svg'
import Design from './assets/services/Design.svg'
import Phone from './assets/services/Phone.svg'
import Code from './assets/services/Code.svg'
import Card from './assets/services/Card.svg'
import Users from './assets/services/Users.svg'
function Services() {
    return (
        <div className="flex flex-col mt-10 justify-center items-center">
            {/* <span className="text-[#ADADAD] mb-5">I like to make things easy and fun</span> */}
            <div className="space-x-2 ">
                <span className="text-white font-medium text-2xl md:text-4xl">My</span>
                <span className="text-[#FF014F] font-medium text-2xl md:text-4xl">Special</span>
                <span className="text-[#FF014F] font-medium text-2xl md:text-4xl">Services</span>
                <span className="text-white font-medium text-2xl md:text-4xl">For</span>
                <span className="text-white font-medium text-2xl md:text-4xl">your</span>
                <br />
                <span className="text-white font-medium text-2xl md:text-4xl">Business</span>
                <span className="text-[#FF014F] font-medium text-2xl md:text-4xl">Development</span>
            </div>
            <div className="flex flex-wrap justify-center">
                <CustomCard title="Web Development" description="Modern and mobile-ready website
                            that will help you reach all of your
                            marketing." icon={Globe} />
                <CustomCard title="UI/UX Design" description="Create intuitive interfaces and
                            delightful user experiences by blending
                            aesthetics with usability." icon={Design} />
                <CustomCard title="APP DEVELOPMENT " description="Modern and mobile-ready application
                            that will help you reach all
                            of your marketing." icon={Phone} />
                <CustomCard title="Web Development" description="Developing a highly secure,
                            fast and scalable APIs both
                            REST and GraphQL." icon={Code} />
                <CustomCard title='Payment Integration' description='Automate the process of payments
                            to allow users pay right on your platform' icon={Card} />
                <CustomCard title='Mentorship' description='Finds great joy in sharing my knowledge
                            with others. As a technical mentor this
                            allows me to give back to the community.' icon={Users} />
            </div>

        </div>
    )
}

function CustomCard({ title, description, icon }) {
    return (
        <span className="bg-[#1E1E1E] flex flex-col items-center justify-center px-10 space-y-4 rounded-lg w-[300px] h-[200px] md:w-[400px] md:h-[300px] hover:border-[#FF014F] border border-transparent hover:scale-105 m-4">
            <img src={icon} alt={title} className="w-10 h-10" /> {/* Display the image using the URL */}
            <span className="text-white text-lg font-bold">{title}</span>
            <span className="text-[#ADADAD] text-sm text-center">{description}</span>
        </span>
    )
}

CustomCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default Services