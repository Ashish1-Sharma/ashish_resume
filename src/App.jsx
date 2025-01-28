import './index.css';
import SlideOne from './slide_one';
import SlideTwo from './slide_two';
import Services from './services';
import Skills from './Skills';
import lines from './assets/lines.svg'
import Projects from './projects';
import Experiences from './experiences';
// import Contact from './contact';
import { useRef } from "react";

function App() {
  const slideOneRef = useRef(null);
  const slideTwoRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);

  // Function to scroll to a specific slide
  const scrollToSlide = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-black p-6 flex-row items-center ">
      <div className="sticky top-0 z-50">

      </div>
      <ul className=' backdrop-blur-sm px-4 py-2 flex-grow flex justify-center sm:space-x-5 space-x-2 items-center'>
        {['Home', 'About', 'Skills', 'Projects', 'Experiences'].map((item) => (
          <li key={item} className='no-underline text-white font-medium hover:text-white p-2 rounded transition-all duration-200 hover:rounded-lg sm:text-sm md:text-lg lg:text-xl hover:bg-[#FF014F] text-xs'>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                switch (item) {
                  case "Home":
                    scrollToSlide(slideOneRef);
                    break;
                  case "About":
                    scrollToSlide(slideTwoRef);
                    break;
                  case "Skills":
                    scrollToSlide(skillsRef);
                    break;
                  case "Projects":
                    scrollToSlide(projectsRef);
                    break;
                  case "Experiences":
                    scrollToSlide(experiencesRef);
                    break;
                  default:
                    break;
                }
              }}
              className="scroll-smooth"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div ref={slideOneRef}>
        <SlideOne />
      </div>
      <div ref={slideTwoRef}>
        <SlideTwo />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experiencesRef}>
        <Experiences />
      </div>
    </div>
  );
}

export default App;

