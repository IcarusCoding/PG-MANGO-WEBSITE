import Head from "next/head";

import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
            <Head>
                <title>Projektgruppe Mango</title>
                <meta name="description" content="A website for the MANGO project group"/>
                <link rel="icon" type="image/x-icon" href="/icon/mango-small.svg"/>
            </Head>
            <NavBar logoSrc={'/icon/mango-small.svg'} logoWidth={46} logoHeight={52}>
                <NavBar.Item name="Start" scrollTo="startSection"/>
                <NavBar.Item name="Team" scrollTo="teamSection"/>
                <NavBar.Item name="Projekt" scrollTo="projectSection"/>
                <NavBar.Item name="Downloads" scrollTo="downloadsSection"/>
            </NavBar>
        </>
    )
};

export default Home;
