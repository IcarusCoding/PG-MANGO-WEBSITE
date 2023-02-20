import {BiTransfer} from "react-icons/bi"
import {MdSecurity} from "react-icons/md"
import {RiShipLine} from "react-icons/ri"
import {TbChecklist} from "react-icons/tb"

import {Features} from "./Features";

const Project = () => {

    return (
        <div>
            <Features
                preFeat={<p className="text-gray-900 dark:text-gray-300 transition-colors">Unser Projekt konzentriert sich darauf, das Problem des Zugriffs auf Schiffdaten in abgelegenen Gebieten mit schlechter Internetverbindung zu lösen. Dies erreichen wir durch die Synchronisierung der Schiffdaten mit einer Landdatenbank unter Verwendung von maritimen Ressourcennamen (MRN) zur Identifikation. Dadurch wird die Datenverfügbarkeit für externe Dienste über unsere REST-Schnittstellen gewährleistet.</p>}
                postFeat={<p className="text-gray-900 dark:text-gray-300 transition-colors">Unsere innovative Plattform bietet eine effizientere Möglichkeit, Schiffsdaten zu verarbeiten, indem wir maritime Ressourcennamen nutzen und internationalen Standards entsprechen. Unsere synchronisierte Datenbank gewährleistet, dass Daten stets auf dem neuesten Stand sind, unabhängig von der Position des Schiffs. Wir sind stolz darauf, eine innovative Lösung anzubieten, die die Effizienz, Sicherheit und Zugänglichkeit der maritimen Industrie verbessert.</p>}
                title="Funktionen"
                subtitle="Im Rahmen unseres aktuellen Projekts zur Synchronisierung von Schiffdaten mit einer Landdatenbank, möchten wir Ihnen im Folgenden einen detaillierten Überblick über die maßgeblichen Leistungsmerkmale unserer Plattform geben.">
                <Features.FeatureEntry icon={<BiTransfer size={32}/>} title="Optimierte Synchronisierung" subtitle="Unser Synchronisierungsprozess ist auf den maritimen Kontext optimiert und gewährleistet einen minimalen Datenverkehr und eine Robustheit gegen mögliche Übertragungsfehler. Dadurch ist sichergestellt, dass die Daten stets auf dem neuesten Stand sind und für Abfragen verfügbar sind."/>
                <Features.FeatureEntry icon={<MdSecurity size={32}/>} title="Sicherer Datenzugriff" subtitle="Wir schützen den Zugriff auf die Landdaten mit modernen Autorisierungs- und Authentifizierungsmechanismen. Wir verwenden auch die maritime Konnektivitätsplattform (MCP) als Identitätsanbieter, um sicherzustellen, dass nur autorisierte Parteien auf die Daten zugreifen können."/>
                <Features.FeatureEntry icon={<TbChecklist size={32}/>} title="IDS Konformität" subtitle="Unsere Connectors auf der Landseite sind konform mit dem Standard der International-Dataspace-Association (IDSA). Durch diese Konformität gewährleisten wir, dass unsere Plattform interoperabel mit anderen Systemen ist, die ebenfalls dem IDS-Standard entsprechen."/>
                <Features.FeatureEntry icon={<RiShipLine size={32}/>} title="ISO-19100 Konformität" subtitle="Alle Daten, die von unseren Schnittstellen bereitgestellt oder abgefragt werden, entsprechen den ISO-19100-S-Standards (S-211, S-421, S-127). Dies bedeutet, dass die Daten standardisiert sind und problemlos in andere Systeme integriert werden können, die demselben Standard entsprechen."/>
            </Features>
        </div>
    );

};

export default Project;
