import React from "react";

import classNames from "classnames";

import {BasicFadeIn} from "../util/Animation";

interface SectionProperties {

    id: string
    container?: boolean
    className?: string
    captionClasses?: string
    end?: JSX.Element | Array<JSX.Element>
    caption?: string
    subCaption?: string
    subCaptionClasses?: string
    dividerClasses?: string
    children: JSX.Element | Array<JSX.Element>

}

const Section = ({id, container, className, end, caption, captionClasses, subCaption, subCaptionClasses, dividerClasses, children}: SectionProperties) => {

    return (
        <div id={id} className={className}>
            <div className={classNames("mx-auto w-full", {container: container})}>
                {
                    (caption && subCaption) &&
                    <div className="p-8">
                        <div className="mx-auto">
                            <BasicFadeIn>
                                <div className="flex flex-col items-center text-center">
                                    <h2 className={classNames("text-4xl font-extrabold tracking-widest transition-colors", captionClasses)}>
                                        {caption}
                                    </h2>
                                    <div className={classNames("w-[50px] h-0.5 my-4 transition-colors", dividerClasses)}/>
                                    <p className={classNames("text-xl font-normal mb-2 text-left md:text-center transition-colors", subCaptionClasses)}>
                                        {subCaption}
                                    </p>
                                </div>
                            </BasicFadeIn>
                        </div>
                    </div>
                }
                {children}
            </div>
            {
                end && end
            }
        </div>
    );

};

Section.defaultProps = {
    container: true,
    end: undefined,
    caption: undefined,
    captionClasses: "text-mango-gray-medium dark:text-mango-gray-lighter",
    subCaption: undefined,
    subCaptionClasses: "text-mango-gray-light dark:text-mango-gray-lighter",
    dividerClasses: "bg-mango-gray-medium dark:bg-mango-gray-lighter"
};

export default Section;
