import React, {useEffect, useState} from "react";

import Image from "next/image";
import {useTheme} from "next-themes";

import classNames from "classnames";
// @ts-ignore
import {Link} from "react-scroll";
import {Disclosure} from "@headlessui/react";

interface NavBarProperties {

    scrollWithViewport?: boolean
    logoSrc: string
    logoWidth: number
    logoHeight: number
    children: JSX.Element | Array<JSX.Element>

}

interface ItemProperties {

    name: string
    offset: number
    scrollTo: string

}

const Item = ({name, offset, scrollTo}: ItemProperties) => {

    return (
        <li>
            <Link to={scrollTo} spy={true} smooth={true} duration={500} offset={offset} activeClass="nav-active"
                  className="text-lg font-medium tracking-widest text-gray-600 [&.nav-active]:text-gray-800 [&.nav-active]:font-bold dark:text-gray-400 dark:[&.nav-active]:text-white hover:text-mango-light dark:hover:text-mango-light transition-colors duration-300 cursor-pointer">
                {name}
            </Link>
        </li>
    );

};

Item.defaultProps = {
    offset: -70
};

const Nav = ({scrollWithViewport, logoSrc, logoWidth, logoHeight, children}: NavBarProperties) => {

    const [scrolling, setScrolling] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        if (!scrollWithViewport) {
            return;
        }
        const handleScroll = () => {
            setScrolling(window.scrollY > 0 && !scrolling);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return (
        <nav className={classNames("z-10 w-full lg:fixed mango-bg-primary transition", {"shadow-md": scrolling})}>
            <Disclosure>
                <div className="flex flex-wrap w-full mx-auto lg:hidden px-8 py-2">
                    <div className="flex flex-1 items-center">
                        <Disclosure.Button>
                            {/*TODO Add Hamburger*/}
                        </Disclosure.Button>
                    </div>
                    <div className="mx-12 h-nav-base">
                        <Image src={logoSrc} alt="alt" width={logoWidth} height={logoHeight}
                               onDragStart={evt => evt.preventDefault()}/>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                        {/*TODO Add ThemeSwitch*/}
                    </div>
                    <Disclosure.Panel className="flex flex-wrap w-full">
                        <ul className="flex flex-col">
                            {children}
                        </ul>
                    </Disclosure.Panel>
                </div>
            </Disclosure>
            <div className="hidden lg:flex items-center px-8 py-2">
                <div className="flex flex-1 h-nav-base">
                    <Image src={logoSrc} alt="logo" width={logoWidth} height={logoHeight} onDragStart={evt => evt.preventDefault()}/>
                </div>
                <div className="mx-12">
                    <ul className="flex md:space-x-8">
                        {children}
                    </ul>
                </div>
                <div className="flex flex-1 justify-end">
                    {/*TODO Add ThemeSwitch*/}
                </div>
            </div>
        </nav>
    );

};

Nav.defaultProps = {
    scrollWithViewport: true
};

export default Object.assign(Nav, {Item});
