import React from "react";
import ExperienceCard from "./components/experience_card.jsx";

const experiences = [
  {
    title: "UIGGeeks",
    subtitle: "Internship • Remote ",
    date: "June 2024 - Sept 2024",
    description: "Collaborated with a mentor who guided me in starting my career and exploring various app ideas. Engaged in discussions about different concepts and worked on implementing them.",
    location: "Chattisgarh",
  },
  {
    title: "Bharat Core",
    subtitle: "Internship • Remote",
    date: "July 2024 - Present",
    description: "Matka Web App: Created a betting website with a web app and mobile application. Gopi Live: Developed an app similar to ShareChat, enabling users to live stream (Tech stack: Flutter, Firebase, ZegoCloud).",
    location: "West Bengal",
  },
  {
    title: "Eco Rides",
    subtitle: "Internship • Remote",
    date: "Sept 2024 - Present",
    description: "Focused on eco-friendly transportation options, allowing riders to rent electric bikes and scooters. Included a feature for users to rent electric cars, promoting sustainable travel solutions.",
    location: "Odisha",
  },
];

function Experiences() {
  return (
    <div className="p-6 flex flex-row items-center justify-center">
        <div className="w-[60vw]">
        <div className="my-5">
                <span className="text-white font-normal text-2xl md:text-3xl">Experiences</span>
                {/* <span className="text-[#FF014F] font-normal text-2xl md:text-4xl">Projects</span> */}
            </div>
        {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          subtitle={experience.subtitle}
          date={experience.date}
          description={experience.description}
          location={experience.location}
        />
      ))}
        </div>
      
    </div>
  );
}

export default Experiences;
