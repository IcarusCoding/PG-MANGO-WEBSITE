import React, {useRef, useEffect, useState} from 'react';
import {animated, useSpring} from 'react-spring';

/* Modified and minified from https://github.com/woofers/react-wavify to support react-spring animations */
const Wave = (props) => {

    const container = useRef(null);
    const frameId = useRef(0);
    const [path, setPath] = useState('');
    const lastUpdate = useRef(0);
    const elapsed = useRef(0);
    const step = useRef(0);

    const calculateWavePoints = () => {
        const points = [];
        for (let i = 0; i <= Math.max(props.points, 1); i++) {
            const scale = 100;
            const x = (i / props.points) * calcWidth();
            const seed = (step.current + (i + i % props.points)) * props.speed * scale;
            const height = Math.sin(seed / scale) * props.amplitude;
            const y = Math.sin(seed / scale) * height + props.height;
            points.push({ x, y });
        }
        return points;
    };

    const buildPath = (points) => {
        let svg = `M ${points[0].x} ${points[0].y}`;
        const initial = {
            x: (points[1].x - points[0].x) / 2,
            y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y),
        };
        const cubic = (a, b) => ` C ${a.x} ${a.y} ${a.x} ${a.y} ${b.x} ${b.y}`;
        svg += cubic(initial, points[1]);
        let point = initial;
        for (let i = 1; i < points.length - 1; i++) {
            point = {
                x: (points[i].x - point.x) + points[i].x,
                y: (points[i].y - point.y) + points[i].y,
            };
            svg += cubic(point, points[i + 1]);
        }
        svg += ` L ${calcWidth()} ${calcHeight()}`;
        svg += ` L 0 ${calcHeight()} Z`;
        return svg;
    };

    const calcWidth = () => container.current.offsetWidth;
    const calcHeight = () => container.current.offsetHeight;

    const redraw = () => {
        setPath(buildPath(calculateWavePoints()));
    };

    const draw = () => {
        if (!props.paused) {
            const now = new Date();
            elapsed.current += now - lastUpdate.current;
            lastUpdate.current = now;
        }
        const scale = 1000;
        step.current = elapsed.current * Math.PI / scale;
        redraw();
    };

    const update = () => {
        draw();
        if (frameId.current) {
            resume();
        }
    };

    const resume = () => {
        frameId.current = requestAnimationFrame(update);
        lastUpdate.current = new Date();
    };

    useEffect(() => {
        if (!frameId.current) {
            resume();
        }
        return () => {
            cancelAnimationFrame(frameId.current);
            frameId.current = 0;
        };
    });

    const {
        style,
        className,
        fill,
        paused,
        children,
        id,
        svgId,
        svgPathId,
        d,
        ref,
        height,
        amplitude,
        speed,
        points,
        ...rest
    } = props;

    const fillAnimation = useSpring({
        fill: fill
    });

    return (
        <div
            style={{ width: '100%', display: 'inline-block', ...style }}
            className={className}
            id={id}
            ref={container}
        >
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" id={svgId}>
                <animated.path
                    d={path}
                    fill={fillAnimation}
                    id={svgPathId}
                    ref={ref}
                    {...rest}
                />
                {children}
            </svg>
        </div>
    );
};

export default Wave;
