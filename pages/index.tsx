import Head from "next/head";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Section from "../components/Section";
import Downloads, {Download, FileType} from "../components/Downloads";

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
            <Section id="startSection" className="mango-bg-primary">
                <div/>
            </Section>
            <Section id="teamSection" className="mango-bg-secondary" caption="Das Team"
                     subCaption="Das Team der Projektgruppe besteht aus zwölf Studenten der Masterstudiengänge Wirtschaftsinformatik und Informatik. Im Rahmen des Projekts nehmen verschiedene Teammitglieder unterschiedliche Gruppe und Rollen ein.">
                <div/>
            </Section>
            <Section id="projectSection" className="mango-bg-primary"
                     captionClasses="text-gray-600 dark:text-mango-gray-lighter"
                     dividerClasses="bg-gray-600 dark:bg-mango-gray-lighter"
                     subCaptionClasses="text-gray-500 dark:text-mango-gray-lighter"
                     caption="Das Projekt"
                     subCaption="In diesem Abschnitt wird das Projekt vorgestellt, darunter die Projektmotivation, sowie die Architektur und die Funktionsweise der einzelnen Komponenten.">
                <Project/>
            </Section>
            <Section id="downloadsSection" className="mango-bg-secondary" caption="Downloads"
                     subCaption="Im Rahmen der Projektgruppe wurden verschiedene Dokumente, Präsentationen und Diagramme angefertigt, welche hier zum Download bereitgestellt werden.">
                <Downloads>
                    <Download fileName={"Endpräsentation"} fileType={FileType.PPT} fileSize={"10 MB"} downloadLink={"file/Test.pptx"}/>
                    <Download fileName={"Projektdokumentation"} fileType={FileType.PDF} fileSize={"8 MB"} downloadLink={"file/Test.pdf"}/>
                    <Download fileName={"Architektur"} fileType={FileType.PNG} fileSize={"12 MB"} downloadLink={"file/Test.png"}/>
                </Downloads>
            </Section>
        </>
    )
};

export default Home;
