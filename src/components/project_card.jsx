import PropTypes, { element } from "prop-types"
import { ArrowUpRight, Info, CircleX } from 'lucide-react';
import { useState } from "react";
// import PropTypes from "prop-types"
function ProjectCard({ title, description, tags, img, link, techStack }) {
    const getTextColor = (tag) => {
        switch (tag) {
            case "Pet Project":
                return "text-yellow-400";
            case "Startup":
                return "text-blue-300";
            case "Client Work":
                return "text-purple-400";
            case "Confidential":
                return "text-red-400";
            default:
                return "text-green-400";
        }
    };
    const [isHovered, setIsHovered] = useState(false)
    return (
        <a href={link}>
            <div className="relative w-full p-3 rounded-xl bg-gradient-to-b from-[#151E31] via-[#182235] to-[#1D283A]  bg-[#1E293B] hover:border  hover:border-white "  >
                <div className="flex flex-col h-full">
                    <div className="grow">
                        <div className="flex flex-row justify-between">
                            <span className="text-white font-bold">{ }</span>
                            <div className="space-x-2">
                                {
                                    tags.map((element, index) => {
                                        return (<span
                                            key={index}
                                            className={`text-xs inline-flex items-center font-medium bg-green-100/40 dark:bg-green-100/5 rounded-full text-center px-2 h-5 ${getTextColor(element)}`}
                                        >
                                            {element}
                                        </span>)
                                    })
                                }
                            </div>
                        </div>


                        <div className="text-white text-lg font-aspekta font-[650] mb-1">{title}</div>
                        <div className="min-h-[5rem] mx:min-h-[3rem]">
                            {!isHovered ? <div className="w-5/6 text-sm text-slate-500 dark:text-slate-400 mb-2 overflow-hidden line-clamp-3 ">{description}</div> : <div className="flex-grow space-x-2">
                                {techStack.map((element, index) => (
                                    <span key={index} className="text-xs inline-flex items-center font-medium bg-green-100/40 dark:bg-green-100/5 rounded-full text-center px-2 h-5  text-blue-300 ">
                                        {element}
                                    </span>
                                ))}</div>
                            }
                        </div>

                        <div className="flex flex-row justify-end space-x-4 fill-current">{!isHovered ? <Info size={20} color="#c2f604" strokeWidth={1} onClick={() => setIsHovered(true)} /> : <CircleX size={20} color="#e20808" strokeWidth={1} onClick={() => setIsHovered(false)} />}{link !=="" ? (
                            <ArrowUpRight size={22} color="#10A7EC" strokeWidth={2} />
                        ) : <></>}</div>

                    </div>

                </div>

            </div>
        </a>
    )
}

ProjectCard.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(PropTypes.string),
    techStack: PropTypes.arrayOf(PropTypes.string),
}
export default ProjectCard