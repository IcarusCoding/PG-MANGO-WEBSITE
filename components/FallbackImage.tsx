import React, {useEffect, useState, ReactElement} from "react";

import Image from "next/image";
import {ImageProps} from "next/dist/client/image";

declare type FallbackImageProperties = {

    fallbackSrc: string;
    children: JSX.Element

}

const FallbackImage = ({fallbackSrc, children}: FallbackImageProperties) => {

    if (children.type !== Image) {
        throw `Wrong child type. Expected Image, got ${children.type}`;
    }

    const child = children as unknown as ReactElement;
    const childProps = child.props as ImageProps;
    const {src} = childProps;

    const [imgSrc, setImgSrc] = useState(src);

    const onLoadingComplete: (img: HTMLImageElement) => void = (img) => {
        if (img.naturalWidth === 0) {
            setImgSrc(fallbackSrc);
        }
    };

    const onError: () => void = () => setImgSrc(fallbackSrc);

    const props = {
        ...childProps,
        src: imgSrc,
        onLoadingComplete: onLoadingComplete,
        onError: onError
    };

    useEffect(() => setImgSrc(src), [src]);

    return React.cloneElement(child, props);
}

export default FallbackImage;
