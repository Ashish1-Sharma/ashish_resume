import './index.css';
import SlideOne from './slide_one';
import SlideTwo from './slide_two';
import Services from './services';
import Skills from './Skills';
import lines from './assets/lines.svg'
import Projects from './projects';
// import Contact from './contact';
function App() {

  return (
    <div className='bg-black px-4  min-h-screen w-full sm:px-4'
    style={{backgroundImage:`url(${lines})`}}>
      <SlideOne/>
      <SlideTwo/>
      <Services/>
      <Skills/>
      <Projects/>
      {/* <Contact/> */}
      <div className="h-[20vw]"></div>
    </div>
  )
}

export default App
