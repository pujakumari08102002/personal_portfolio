import { useRef, useState } from "react";
import { FaGithub, FaHome } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import useClickOutside from "../hooks/useClickOutside";

export const Burger = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    useClickOutside(ref, () => setOpen(false))

    return (
        <button className='relative ' onClick={() => setOpen(true)}>
            <div className="flex items-center gap-x-1">
                <GiHamburgerMenu className='text-3xl dark:text-slate-400 dark:hover:text-white font-semibold'/>
            </div>
            {
                open && (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute w-[150px] top-[130%] z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
                        ref={ref}
                    >
                        <a href="#home" onClick={() => setOpen(false)}>
                            <div className='flex w-full items-center font-semibold border-b-[1px] border-richblack-700 font-inter gap-x-4 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25'>
                                <FaHome className='text-lg'/>
                                Home
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/puja-kumari-81945224b/" target="_blank" onClick={() => setOpen(false)}>
                            <div className='flex w-full items-center font-semibold border-b-[1px] border-richblack-700 font-inter gap-x-4 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25'>
                                <FaLinkedinIn className='text-lg'/>
                                LinkedIn
                            </div>
                        </a>
                        <a href="https://github.com/pujakumari08102002" target="_blank" onClick={() => setOpen(false)}>
                            <div className='flex w-full items-center font-semibold border-b-[1px] border-richblack-700 font-inter gap-x-4 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25'>
                                <FaGithub className='text-lg'/>
                                github
                            </div>
                        </a>
                        
                    </div>
                )
            }
        </button>
    )
}