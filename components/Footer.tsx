import React, {useState} from "react";
import Image from "next/image";

// @ts-ignore
import {Link} from "react-scroll";
import {FaRegCopyright, FaReact} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import {SiTailwindcss} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

import IconSwitcher from "./IconSwitcher";

const Footer = () => {

    const [hover, setHover] = useState(false);

    const getYear: () => number = () => new Date().getFullYear();

    const enter = () => {
        setHover(true);
    };

    const leave = () => {
        setHover(false);
    };

    return (
        <div className="flex flex-wrap flex-row justify-center items-center px-8 bg-zinc-900">
            <div className="hidden lg:flex lg:flex-1">
                <Link to="startSection" smooth={true} duration={500} offset={-200}>
                    <Image src="/icon/mango-full.svg" alt="logo" className="cursor-pointer" width={114} height={52}
                           onDragStart={evt => evt.preventDefault()}/>
                </Link>
            </div>
            <div className="flex text-md font-medium py-5 justify-center items-center text-gray-200">
                <p>Copyright</p>
                <FaRegCopyright size={15} className="mx-1"/>
                <p>{getYear()}</p>
                <span className="w-[2px] h-[22px] mx-2 bg-gray-500"/>
                <p>PG MANGO</p>
            </div>
            <div className="sm:flex flex-1 flex-wrap justify-end items-center text-center hidden whitespace-pre-wrap text-md font-medium [&>p]:text-gray-400 [&>span]:text-gray-200"
                 onMouseEnter={enter} onMouseLeave={leave}>
                <p>Made with </p>
                <span className="font-normal">
                    {/* eslint-disable-next-line react/jsx-key */}
                    <IconSwitcher icons={[<AiFillHeart/>, <TbBrandNextjs/>, <SiTailwindcss/>, <FaReact/>]} delay={1000}/>
                </span>
                <p> by </p>
                <span>Deniz </span>
                <p>&amp;</p>
                <span> Nico</span>
            </div>
        </div>
    );

};

export default Footer;
