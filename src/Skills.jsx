// import Globe from './assets/services/Globe.svg'
// import Design from './assets/services/Design.svg'
import { useState } from 'react'
// import { styled } from '@mui/material/styles';

import DialogBox from './components/dialog_box.jsx';
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// import Phone from './assets/services/Phone.svg'
// import Code from './assets/services/Code.svg'
// import Card from './assets/services/Card.svg'
function Skills() {

    // const [inputValue,changedValue] = useState("hello");
    // const [openState, closeState] = useState(false)
    const [initialDialogTitle, newDialogTitle] = useState('App Development')
    // const [initialLg,newLg] = useState([])

    const openDialog = (title) => {
        console.log("I have set Down the CloseState value to false to close the dialog")
        newDialogTitle(title)
        // newLg(programmingLanguages[title])
        // closeState(true)
    }
    // const closeDialog = () => {
    //     console.log("This function is used tfor closing the dialog")
    //     // closeState(false)
    // }

    const programmingLanguages = {
        'App Development': [
            { title: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { title: 'Dart', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { title: 'Firebase', img: 'https://www.svgrepo.com/show/353735/firebase.svg' },
        ],
        'Web Development': [
            { title: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { title: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            //   { title: 'Express.js', img: 'https://cdn.iconscout.com/icon/free/png-512/free-express-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-pack-icons-1175029.png?f=webp&w=256' },
            { title: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { title: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { title: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { title: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            //   { title: 'RESTful APIs', img: 'https://www.svgrepo.com/show/354356/api.svg' },
        ],
        'Automation': [
            { title: 'Selenium', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
            { title: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ],
        'Backend': [
            { title: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { title: 'Express.js', img: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png' },
            { title: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            //   { title: 'REST APIs', img: 'https://www.svgrepo.com/show/354356/api.svg' },
            //   { title: 'JWT', img: 'https://www.svgrepo.com/show/306981/json-web-token-logo.svg' },
        ],
    };


    // const onValueChanged=(event)=>{
    //  changedValue(event.target.value)
    // }
    return (
        <div className="flex flex-col items-center">
            <div className="">
                
            </div>
            <div className="text-white font-normal text-2xl md:text-4xl my-5"><span className="text-white font-medium text-2xl md:text-4xl">My </span>
            <span className="text-[#FF014F] font-medium text-2xl md:text-4xl">Talent</span> Professional Skills</div>
            <div className='flex flex-col md:flex-row space-x-5'>

                <div className='flex md:flex-col flex-wrap'>
                    <button className={`flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white ${initialDialogTitle === 'App Development' ? 'bg-[#FF014F]' : 'bg-[#1E1E1E]'
                            }`} onClick={() => { openDialog('App Development') }} >
                        <span className='text-white '>App Development</span>
                    </button>
                    <button
                        className={`flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white ${initialDialogTitle === 'Web Development' ? 'bg-[#FF014F]' : 'bg-[#1E1E1E]'
                            }`}
                        onClick={() => {
                            openDialog('Web Development');
                        }}
                    >
                        <span className='text-white'>Web Development</span>
                    </button>

                    <button
                        className={`flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white ${initialDialogTitle === 'Automation' ? 'bg-[#FF014F]' : 'bg-[#1E1E1E]'
                            }`}
                        onClick={() => {
                            openDialog('Automation');
                        }}
                    >
                        Automation
                    </button>
                    <button className={`flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white ${initialDialogTitle === 'Backend' ? 'bg-[#FF014F]' : 'bg-[#1E1E1E]'
                            }`} onClick={() => { openDialog('Backend') }} >
                        <span className='text-white '>Backend</span>
                    </button>
                    {/* <button className='flex bg-[#1E1E1E] p-3 rounded-xl my-2 mx-2' onClick={openDialog} >Click me
                </button> */}
                </div>
                <div className='md:w-[500px] w-[80vw] bg-[#1E1E1E] mt-2  rounded-lg '>
                    {
                        programmingLanguages[initialDialogTitle]?.length > 0 ? (<ul className="text-white flex flex-wrap">
                            {programmingLanguages[initialDialogTitle].map((language, index) => (
                                <li key={index} className=" py-2 px-4 shadow-lg bg-black flex flex-col rounded-lg items-center m-3  ">
                                    <img src={language.img} className='w-[30px]' />
                                    <span>{language.title}</span>

                                </li>
                            ))}
                        </ul>) : <p>hello</p>
                    }
                </div>
            </div>
            {/* <div className="text-white">{open}</div> */}
            {/* <DialogBox open={openState} close={closeDialog} title={initialDialogTitle} list={programmingLanguages[initialDialogTitle]} ></DialogBox> */}
            {/* <BorderLinearProgress variant="determinate" value={50} color='white' /> */}
        </div>
    )
}

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//       backgroundColor: theme.palette.grey[200],
//       ...theme.applyStyles('dark', {
//         backgroundColor: theme.palette.grey[800],
//       }),
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//       borderRadius: 5,
//       backgroundColor: '#1a90ff',
//       ...theme.applyStyles('dark', {
//         backgroundColor: '#308fe8',
//       }),
//     },
//   }));
export default Skills