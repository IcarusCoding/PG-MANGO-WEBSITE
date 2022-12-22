import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import classNames from "classnames";

import {secondaryDark, secondaryLight} from "../util/ColorResolver";
import Wave from "./Wave";
import {useBreakpoint} from "../util/Hooks";

interface WaveWrapperProperties {
    className?: string
}

const WaveWrapper = ({className}: WaveWrapperProperties) => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();

    // prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    // TODO check if that is the best way
    const { isLg } = useBreakpoint('lg');
    const [paused, setPaused] = useState(false);

    if (!isLg && !paused) {
        setPaused(true);
    } else if (isLg && paused) {
        setPaused(false);
    }

    if (!mounted) {
        // prevent layout shift
        return (
            <div className={"h-[150px] bg-transparent"}></div>
        );
    }

    return (
        <div className={classNames("dark:fill-mango-dark fill-mango-gray-dark transition-colors -mb-1 md:mb-0", className)}>
            <Wave fill={theme === 'dark' ? secondaryDark : secondaryLight} paused={paused} height={20} amplitude={40}
                  speed={0.15} points={3} style={{display: "block"}}/>
        </div>
    );
};

WaveWrapper.defaultProps = {
    className: undefined
};

export default WaveWrapper;
