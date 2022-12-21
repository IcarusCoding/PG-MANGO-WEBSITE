import FallbackImage from "./FallbackImage";
import Image from "next/image";

import {BasicFadeIn} from "../util/Animation";

interface TeamProperties {
    children: JSX.Element | Array<JSX.Element>
}

interface TeamEntryProperties {
    name: string
    degree: string
    group: string
    task: string
    img: string
}

const Entry = ({name, degree, group, task, img}: TeamEntryProperties) => {

    return (
        <BasicFadeIn>
            <div className="flex flex-col rounded-md items-center mango-bg-primary transition shadow-sm hover:shadow-md hover:scale-105 w-[350px] px-8 sm:mx-6 my-12 md:w-64 lg:w-96">
                <FallbackImage fallbackSrc="/img/avatar/default.jpg">
                    <Image src={img} alt="dp" sizes="100vw" height="0" width="0" className="drop-shadow-md rounded-full w-24 h-24 -mt-12" onDragStart={evt => evt.preventDefault()}/>
                </FallbackImage>
                <div className="flex-1 text-center my-4 mango-text-primary">
                    <p className="text-xl font-semibold">{name}</p>
                    <div className="">
                        <p className="text-gray-500 dark:text-gray-400 transition-colors">{degree}</p>
                        <p className="text-gray-500 dark:text-gray-400 transition-colors">{group}</p>
                        <p className="font-medium">{task}</p>
                    </div>
                </div>
            </div>
        </BasicFadeIn>
    );

};

const Team = ({children}: TeamProperties) => {

    return (
        <div className="p-8">
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {children}
                </div>
            </div>
        </div>
    );

};

export default Object.assign(Team, { Entry });
