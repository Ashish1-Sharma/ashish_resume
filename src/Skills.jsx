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
    const [openState, closeState] = useState(false)
    const [initialDialogTitle, newDialogTitle] = useState('')
    // const [initialLg,newLg] = useState([])
    
    const openDialog = (title) => {
        console.log("I have set Down the CloseState value to false to close the dialog")
        newDialogTitle(title)
        // newLg(programmingLanguages[title])
        closeState(true)
    }
    const closeDialog = () => {
        console.log("This function is used tfor closing the dialog")
        closeState(false)
    }

    const programmingLanguages = {
        'App Development': [
            { title: 'Flutter', progress: '70' },
            { title: 'Dart', progress: '65' },
            { title: 'Firebase', progress: '60' },
        ],
        'Web Development': [
            { title: 'React.js', progress: '50' },
            { title: 'Node.js', progress: '60' },
            { title: 'Express.js', progress: '50' },
            { title: 'HTML', progress: '70' },
            { title: 'CSS', progress: '70' },
            { title: 'JavaScript', progress: '65' },
            { title: 'MongoDB', progress: '50' },
            { title: 'RESTful APIs', progress: '55' },
        ],
        'Automation': [
            { title: 'Selenium', progress: '80' },
            { title: 'Python', progress: '60' },
        ],
        'Backend': [
            { title: 'Node.js', progress: '70' },
            { title: 'Express.js', progress: '60' },
            { title: 'MongoDB', progress: '60' },
            { title: 'REST APIs', progress: '70' },
            { title: 'JWT ', progress: '50' },
        ]
    }
    
    // const onValueChanged=(event)=>{
    //  changedValue(event.target.value)
    // }
    return (
        <div className="flex flex-col items-center">
            <div className="">
                <span className="text-white font-medium text-sm">My </span>
                <span className="text-[#FF014F] font-medium text-sm">Talent</span>
            </div>
            <div className="text-white font-normal text-4xl">Professional Skills</div>
            <div className='flex flex-wrap'>
                <button className='flex bg-[#1E1E1E] p-3 rounded-xl  mx-2 my-2 hover:scale-110 ' onClick={() => { openDialog('App Development') }} >
                    <span className='text-white '>App Development</span>
                </button>
                <button className='flex bg-[#1E1E1E] p-3 rounded-xl  mx-2 my-2 hover:scale-110 ' onClick={() => { openDialog('Web Development') }} >
                    <span className='text-white '>Web Development</span>
                </button>
                <button className='flex bg-[#1E1E1E] p-3 rounded-xl  mx-2 my-2 hover:scale-110 ' onClick={() => { openDialog('Automation') }} >
                    <span className='text-white '>Automation</span>
                </button>
                {/* <button className='flex bg-[#1E1E1E] p-3 rounded-xl  mx-2 my-2 hover:scale-110 ' onClick={() => { openDialog('Database') }} >
                    <span className='text-white '>Database</span>
                </button> */}
                <button className='flex bg-[#1E1E1E] p-3 rounded-xl  mx-2 my-2 hover:scale-110 ' onClick={() => { openDialog('Backend') }} >
                    <span className='text-white '>Backend</span>
                </button>
                {/* <button className='flex bg-[#1E1E1E] p-3 rounded-xl my-2 mx-2' onClick={openDialog} >Click me
                </button> */}
            </div>
            {/* <div className="text-white">{open}</div> */}
            <DialogBox open={openState} close={closeDialog} title={initialDialogTitle} list={programmingLanguages[initialDialogTitle]} ></DialogBox>
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