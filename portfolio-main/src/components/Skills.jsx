import React from 'react'
import { FaCss3, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";


const frontend = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
        className: "text-[#FF5733]"
    },
    {
        name: "CSS",
        icon: <SiCss3 />,
        className: "text-[#264de4]",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        className: "text-[#264de4]",
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript />,
        className: "text-[#f0db4f]",
    },
    {
        name: "React js",
        icon: <FaReact />,
        className: "text-[#61DBFB]",
    },
    {
        name: "Redux",
        icon: <TbBrandRedux />,
        className: "text-[#764abc]",
    },
];



// const backend = [
//     {
//         name: "Node js",
//         icon: <FaNode/>,
//         className: 'text-[#3c873a]',
//     },
//     {
//         name: "Express js",
//         icon: <SiExpress/>,
//     },
// ];

const Database = [
    {
        name: "MySql",
        icon: <GrMysql/>,
        className: "text-[#00758f]"
    },
    {
        name: "MongoDB",
        icon: <SiMongodb/>,
        className: "text-[#589636]"
    },
];

const others = [
    {
        name: "Git",
        icon: <FaGitAlt/>,
        className: "text-[#F1502F]"
    },
    {
        name: "Git Hub",
        icon: <FaGithub/>
    },
    {
        name: "Postman",
        icon: <SiPostman/>,
        className: "text-[#EF5B25]"
    },
]

const Skills = () => {
  return (
    <div className='flex flex-wrap justify-between'>
            {/* Frontend */}
            <div className='py-5 px-6 rounded-lg mb-5 bg-skill-gradient w-full lg:w-[250px] dark:bg-light-gradient dark:text-richblack-5 hover:scale-[101%] transition-all duration-200'>
            <p className='font-mono font-bold text-xl mb-2'>Frontend</p>
            {frontend.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[16px] font-sans font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>

            {/* backend */}
            {/* <div className='py-5 px-6 rounded-lg mb-5 bg-skill-gradient w-full lg:w-[250px] dark:bg-light-gradient dark:text-richblack-5 hover:scale-[101%] transition-all duration-200'>
            <p className='font-mono font-bold text-xl mb-2'>Backend</p>
            {backend.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[16px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div> */}

            {/* database */}
            <div className='py-5 px-6 rounded-lg mb-5 bg-skill-gradient w-full lg:w-[250px] dark:bg-light-gradient dark:text-richblack-5 hover:scale-[101%] transition-all duration-200'>
            <p className='font-mono font-bold text-xl mb-2'>Database</p>
            {Database.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[16px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>

            {/* others */}
            <div className='py-5 px-6 rounded-lg mb-5 bg-skill-gradient w-full lg:w-[250px] dark:bg-light-gradient dark:text-richblack-5 hover:scale-[101%] transition-all duration-200'>
            <p className='font-mono font-bold text-xl mb-2'>Other Tech</p>
            {others.map((tech, index) => (
                <div key={index} className='flex items-center gap-x-3 py-2 text-[16px] font-mono font-semibold '>
                    <span className={tech.className} style={{ fontSize: '24px' }} >{tech.icon}</span> 
                    <span>{tech.name}</span>
                </div>
            ))}
            </div>
        </div>
  )
}

export default Skills