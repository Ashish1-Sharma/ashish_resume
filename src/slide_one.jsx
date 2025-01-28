// import linkdin from './assets/linkdin.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import mail from './assets/mail.svg'
import twitter from './assets/twitter.svg'
import { Phone } from 'lucide-react';
import profile from './assets/profile.png'
function SlideOne() {
    return (
        <div className=''>
            {/* <nav className='flex items-center  border-gray-100 ml-4 sm:ml-0 mr-4 sm:mr-0  pt-2 pb-2'>
                 <span className="">Ashish sharma</span> 
                <ul className='flex-grow flex justify-center sm:space-x-5 space-x-2  items-center'>
                    {['Home', 'About', 'Portfolio', 'Contact', 'Exhibition'].map((item) => (
                        <li key={item} className='no-underline text-white font-medium hover:text-white p-2 rounded transition-all duration-200 hover:rounded-lg sm:text-sm md:text-lg lg:text-xl hover:bg-[#FF014F] text-xs'>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='h-[4vw] w-[4vw] rounded-full overflow-hidden ml-0 box-border sm:h-[3vw] sm:w-[3vw] lg:h-[2vw] lg:w-[2vw]'>
                    <img
                        src='https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg'
                        className='w-full h-full object-cover'
                        alt='Profile'
                    />
                </div>

            </nav> */}
            <div className='flex flex-row justify-center items-center'>
                <div className="flex flex-col justify-start mt-5">
                    <div className="text-[#ADADAD] text-sm mb-3">HELLO , MY NAME IS</div>
                    <div className='mb-6'>
                        <span className="text-[#FF014F] font-bold text-5xl">Ashish </span>
                        <span className="text-white font-semibold text-5xl">Sharma</span>
                    </div>
                    <div className="text-[#ADADAD] mb-3">Software Engineer</div>
                    {/* <div className="text-[#ADADAD]">+91 8532059788</div> */}
                    <div className="text-white md:w-[50vw] mb-3 line-clamp-8">With over a year of hands-on experience in Flutter, I specialize in creating intuitive, responsive, and user-friendly mobile applications. My skill set extends to building interactive and visually appealing web interfaces, backed by a solid understanding of modern development practices.

                        As a final-year BTech student. My work reflects a commitment to delivering high-quality, scalable solutions that enhance user experiences. With a drive for innovation and a goal to work on international projects, I aim to bring creativity and technical excellence to everything I build.</div>
                    <div className="flex flex-row space-x-4 mb-3">
                    <a href="https://drive.google.com/uc?export=download&id=1UMlMWbkpD6hFaHFkg7FOil4ybxToRRuO" target="_blank"><button className="text-white bg-[#FF014F] p-2 rounded-md shadow-lg " >Download Resume</button></a>
                        <button className="text-white border-[#FF014F] border-solid border p-2 rounded-md">Contact Me</button>
                    </div>
                    <div className='flex space-x-4 mt-3'>
                        <button className='bg-[#1E1E1E] p-2 rounded-lg'><a href="https://github.com/Ashish1-Sharma" target="_blank"><img src={github} alt="" /></a></button>
                        <button className='bg-[#1E1E1E] p-2 rounded-lg'><a href="https://www.linkedin.com/in/ashish-sharma-8a9675224/" target="_blank"><img src={linkedin} alt="" /></a></button>
                        <button className='bg-[#1E1E1E] p-2 rounded-lg'><a href="mailto:wwwviveksharma45@gmail.com" target="_blank"><img src={mail} alt="" /></a></button>
                        <button className='bg-[#1E1E1E] p-2 rounded-lg'><a href="tel:+918532059788" target="_blank"><Phone color='#FF014F'/></a></button>
                        {/* <button className='bg-[#1E1E1E] p-2 rounded-lg'><a href="https://github.com/Ashish1-Sharma" target="_blank"><img src={twitter} alt="" /></a></button> */}
                    </div>


                </div>

                <img src={profile} alt='error' className='w-0 hidden md:w-96 md:block' />
            </div>
            <div className='flex mt-5 md:flex-row 900:items-start md:items-start flex-col items-center m-3'>

                {/* <div className='pr-3'>
                    <p className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl inlline text-right line-clamp-2'>Software Developer</p>
                    <p className='text-right mt-5 font-medium line-clamp-2 md:text-sm'>Welcome to Ashish visual journey that transcends the moment created by app Developer.</p>
                    {/* <div className='flex justify-start'>{["YT", "IG", "FB", "X"].map((item) => (
                        <span key={item} className="border-black w-10 h-10 rounded-full border-2 text-center font-bold leading-10 mr-2 mt-2  hover:scale-110 transition">{item}</span>
                    ))}</div> 
                    <div className='flex justify-between mt-4'>
                        <span className='mr-10' >
                            <h2 className='text-4xl font-bold italic text-end md:text-6xl sm:text-4xl'>250K</h2>
                            <p className='font-medium text-xs text-end  md:text-sm'>Videos that reaching a wide audience and give lasting impression</p>
                        </span>
                        <span>
                            <h2 className='text-4xl font-bold italic text-end  md:text-6xl sm:text-4xl'>800K</h2>
                            <p className='font-medium text-xs text-end md:text-sm'>Videos that reaching a wide audience and give lasting impression</p>
                        </span>
                    </div> */}
                {/* </div> */}
                {/* <div className='hidden  md:flex relative bg-[#FEB245] h-[60vw] w-[60vw] md:h-[40vw] 900:w-[40vw] sm:ml-3 justify-center items-center border-b rounded-3xl mt-10 md:mt-0 sm:mt-10 shadow-lg transition-transform transform hover:scale-105'> 
                    <span className='absolute top-5 left-5 text-white font-serif font-bold text-3xl drop-shadow-lg'>Ashish <br />sharma</span>

                    <span className='absolute top-2 right-2 bg-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:shadow-2xl'>
                        <span className='text-white font-bold'>+</span> {/* Add icon or text here 
                    </span>

                    <span className='absolute flex flex-col space-y-2 bottom-2 left-2'>
                        <span className='bg-black w-8 h-8 rounded-full transition duration-300 hover:scale-110'><img src={linkdin} alt="linkdin"/></span>
                        <span className='bg-black w-8 h-8 rounded-full transition duration-300 hover:scale-110'></span>
                        <span className='bg-black w-8 h-8 rounded-full transition duration-300 hover:scale-110'></span>
                    </span>
                </div> 
                */}

            </div>
        </div>
    )
}

export default SlideOne