interface FeatureEntryProperties {
    icon: JSX.Element
    title: string
    subtitle: string
}

interface FeaturesProperties {
    preFeat?: JSX.Element | Array<JSX.Element>
    postFeat?: JSX.Element | Array<JSX.Element>
    title: string
    subtitle: string
    children: JSX.Element | Array<JSX.Element>
}

const FeatureEntry = ({icon, title, subtitle}: FeatureEntryProperties) => {

    return (
        <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-600 dark:bg-slate-700 text-gray-300 dark:text-gray-400 transition-colors">
                {icon}
            </div>
            <h6 className="mb-2 font-bold leading-5 text-gray-700 dark:text-gray-400 transition-colors">{title}</h6>
            <p className="mb-3 text-md text-gray-600 dark:text-gray-300 leading-snug transition-colors">
                {subtitle}
            </p>
        </div>
    );

}

const Feats = ({preFeat, postFeat, title, subtitle, children}: FeaturesProperties) => {
    return (
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
            {preFeat &&
                <div className="pb-6">
                    {preFeat}
                </div>
            }
            <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                <div className="lg:w-1/4">
                    <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg transition-colors">
                        {title}
                    </h2>
                </div>
                <div className="lg:w-3/4">
                    <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg transition-colors">
                        {subtitle}
                    </p>
                </div>
            </div>
            <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {children}
            </div>
            {postFeat &&
                <div className="pt-6">
                    {postFeat}
                </div>
            }
        </div>
    );
};

Feats.defaultProps = {
    preFeat: undefined,
    postFeat: undefined
};

export const Features = Object.assign(Feats, { FeatureEntry });
