const Hamburger = () => {

    return (
        <div className={`flex flex-col items-center gap-1 rounded-md`}>
            <div className="h-0.5 w-5 mango-bg-text transition-transform duration-300 ui-open:rotate-45 ui-open:translate-y-1.5"/>
            <div className="h-0.5 w-4 mango-bg-text transition-opacity duration-300 ui-open:opacity-0"/>
            <div className="h-0.5 w-5 mango-bg-text transition-transform duration-300 ui-open:-rotate-45 ui-open:-translate-y-1.5"/>
        </div>
    );

};

export default Hamburger;
