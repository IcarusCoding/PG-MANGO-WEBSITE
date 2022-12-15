import React, {useEffect, useState} from "react";

import {animated, useSpring} from 'react-spring';

import {textLight, textDark} from "../util/ColorResolver";

interface ThemeSwitchProperties {

    id: string
    darkMode: boolean
    toggleFunc: () => void

}

const springProperties = {
    mass: 4,
    tension: 300,
    friction: 35
};

const ThemeSwitch = ({id, darkMode, toggleFunc}: ThemeSwitchProperties) => {

    const [mounted, setMounted] = useState(false);

    const colorAnimation = useSpring({
        color: darkMode ? textLight : textDark,
    });

    const fillAnimation = useSpring({
        fill: darkMode ? textLight : textDark
    });

    const sunRayAnimation = useSpring({
        opacity: darkMode ? 0 : 1
    });

    const rotationAnimation = useSpring({
        transform: `rotate(${darkMode ? "40" : "100"}deg)`,
        config: {...springProperties}
    });

    const circleRadiusAnimation = useSpring({
        r: darkMode ? 9 : 5,
        config: {...springProperties}
    });

    const maskAnimation = useSpring({
        cx: darkMode ? "50%" : "100%",
        cy: darkMode ? "23%" : "0%",
        config: {...springProperties}
    });

    // prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <animated.svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="none"
                      strokeWidth={darkMode ? 0 : 2} strokeLinecap="round" onClick={toggleFunc}
                      cursor="pointer" style={{...colorAnimation, ...rotationAnimation}}>
            <mask id={id}>
                <rect x="0" y="0" height="100%" width="100%" fill="#FFF"></rect>
                { /* @ts-ignore */ }
                <animated.circle r="9" fill="#000" style={{...maskAnimation}}/>
            </mask>
            <animated.circle cx="12" cy="12" mask={`url(#${id})`} style={{...fillAnimation, ...circleRadiusAnimation}}/>
            <animated.g stroke="currentColor" color={textDark} style={{...sunRayAnimation}}>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </animated.g>
        </animated.svg>
    );

};

export default ThemeSwitch;
