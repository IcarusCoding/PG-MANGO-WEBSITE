import {useView} from "./Hooks";
import classNames from "classnames";

interface AnimationProperties {
    children: JSX.Element | Array<JSX.Element>
    delay?: number
}

export const BasicFadeIn = ({children, delay}: AnimationProperties) => {

    const [inView, ref] = useView();

    return (
        <div ref={ref} className={classNames({"opacity-0 -translate-y-6": !inView, "opacity-1 translate-y-0": inView})} style={{transitionDuration: `${delay}ms`}}>
            {children}
        </div>
    );

};

BasicFadeIn.defaultProps = {
    delay: 1000
};
