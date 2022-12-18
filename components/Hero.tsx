import Image from "next/image";

interface HeroProperties {

    caption: string | JSX.Element | Array<JSX.Element>
    subCaption: string
    imgSrc: string
    imgWidth: number
    imgHeight: number

}

const Hero = ({caption, subCaption, imgSrc, imgWidth, imgHeight}: HeroProperties) => {

    return (
        <div className="flex items-center p-8 lg:py-32">
            <div className="max-w-2xl mr-auto mb-8 mango-text-primary ">
                {/* TODO fix on md breakpoint*/}
                <h1 className="text-4xl leading-snug font-bold tracking-tight xl:text-6xl xl:leading-tight text-center md:text-left">{caption}</h1>
                <p className="text-xl py-5 xl:text-2xl">{subCaption}</p>
            </div>
            <div className="hidden md:flex">
                <Image src={imgSrc} alt="hero-image" height={imgHeight} width={imgWidth} className="drop-shadow-md" onDragStart={evt => evt.preventDefault()}/>
            </div>
        </div>
    );

};

export default Hero;
