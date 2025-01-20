import check from './assets/check.svg'

function SlideTwo() {
    return (
        <div className="flex items-center flex-col">
            
                <div className="text-[#ADADAD] text-sm mb-5 text-center">About Me</div>
                <div className='text-center'>
                    <span className="text-[#FF014F] font-medium text-4xl">Driven</span>
                    <span className="text-white font-medium text-4xl"> Innovative</span>
                    <br />
                    <span className="text-white font-medium text-4xl"> Software</span>
                    <span className="text-[#FF014F] font-medium text-4xl"> Engineer</span>
                </div>
                <div className="text-[#ADADAD] mt-5 text-center w-[70vw]">More than 1 year of Experience in the development of 
                    software and solutions. A conscientious person who
                     pays attention to details. Very passionate about 
                     software development, always willing and ready to 
                     learn new things/concepts. Proven leader with the 
                     ability to streamline development processes to drive 
                     the achievement of organisational objectives.</div>
                     <div className='flex flex-col space-y-5 mt-5'>
                     <div className='flex flex-row space-x-5'>
                        <span><img src={check} alt=""/></span>
                        <span className='text-white'>Skilled in developing highly interactive front-end user interfaces for web applications using technologies like React.js.</span>
                     </div>
                     <div className='flex flex-row space-x-5'>
                        <span><img src={check} alt=""/></span>
                        <span className='text-white'>Proficient in creating and managing backend functionalities for web and mobile applications.</span>
                     </div>
                     <div className='flex flex-row space-x-5'>
                        <span><img src={check} alt=""/></span>
                        <span className='text-white'>Over 1 year of experience in Flutter, building cross-platform mobile applications.</span>
                     </div>
                     <div className='flex flex-row space-x-5'>
                        <span><img src={check} alt=""/></span>
                        <span className='text-white'>Familiar with automation processes to streamline workflows and improve efficiency.</span>
                     </div>
                     </div>
            
        </div>
    )
}


export default SlideTwo