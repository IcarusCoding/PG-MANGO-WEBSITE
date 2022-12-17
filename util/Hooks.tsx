import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";

import {useMediaQuery} from 'react-responsive';

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import {useInView} from "framer-motion";

/* useInterval hook */
export const useInterval = <T extends object[]>(callbackFunc: (...args: T) => void, delay: number)
    : [boolean, Dispatch<SetStateAction<boolean>>] => {

    const callbackRef = useRef();
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        // @ts-ignore
        callbackRef.current = callbackFunc;
    }, [callbackFunc]);

    useEffect(() => {
        const callCallbackFunc = () => {
            // @ts-ignore TODO type safety
            callbackRef.current();
        };
        if (isRunning) {
            const id = setInterval(callCallbackFunc, delay);
            return () => clearInterval(id);
        }
    }, [delay, isRunning]);

    return [isRunning, setIsRunning];
};

export const useView = (): [boolean, React.MutableRefObject<null>] => {
    const ref = useRef(null);
    return [useInView(ref, {once: true, amount: 0.5}), ref];
};

/* useBreakpoint hook */
// @ts-ignore
const breakpoints = resolveConfig(tailwindConfig).theme.screens;
type BreakpointKey = keyof typeof breakpoints;

export function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
    const bool = useMediaQuery({
        // @ts-ignore
        query: `(min-width: ${breakpoints[breakpointKey]})`,
    });
    // @ts-ignore
    const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
    type Key = `is${Capitalize<K>}`;
    return {
        [`is${capitalizedKey}`]: bool,
    } as Record<Key, boolean>;
}
