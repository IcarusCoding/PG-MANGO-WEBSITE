import React, {useState} from "react";

import {animated, useTransition} from 'react-spring';

import {useInterval} from "../util/Hooks";

interface IconSwitcherProperties {

    icons: Array<JSX.Element>
    delay: number

}

const IconSwitcher = ({icons, delay}: IconSwitcherProperties) => {

    const [iconIndex, setIconIndex] = useState(0);

    const [_, setIsRunning] = useInterval(() => {
        setIconIndex(((iconIndex + 1) % (icons.length - 1)) + 1);
    }, delay);

    const transitions = useTransition(iconIndex, {
        from: {opacity: 0, transform: 'translate3d(0,-10px,0) rotate(-135deg) scale(0.8)'},
        enter: {opacity: 1, transform: 'translate3d(0,0px,0) rotate(0deg) scale(1)'},
        leave: {opacity: 0, transform: 'translate3d(0,10px,0) rotate(0deg) scale(0.5)'}
    });

    const mouseLeave = () => {
        setIsRunning(false);
        setIconIndex(0);
    };

    return (
        <div className="h-4 w-4" onMouseEnter={() => setIsRunning(true)} onMouseLeave={mouseLeave}>
            {transitions((style, item) => (
                <animated.div style={style} className="absolute origin-center">
                    {icons[item]}
                </animated.div>
            ))}
        </div>
    );
}

export default IconSwitcher;
