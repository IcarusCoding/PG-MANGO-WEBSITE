import {FaDownload} from 'react-icons/fa';
import {AiFillFileImage, AiFillFilePdf, AiFillFilePpt, AiFillFileText} from "react-icons/ai";

import {BasicFadeIn} from "../util/Animation";

export enum FileType {
    PDF = '.pdf',
    TXT = '.txt',
    PNG = '.png',
    PPT = '.ppt'
}

interface DownloadsProperties {
    children: JSX.Element | Array<JSX.Element>
}

interface DownloadEntryProperties {
    fileName: string,
    fileType: FileType,
    fileSize: string,
    downloadLink: string
}

export const Download = ({ fileName, fileType, fileSize, downloadLink }: DownloadEntryProperties) => {

    const classes = "w-8 h-8 absolute top-0 right-0 m-6 text-gray-800 dark:text-gray-300 transition-colors";

    return (
        <BasicFadeIn>
            <div className="w-[300px] px-3 py-3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:text-gray-300 transition-colors">
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors">{fileName}</h2>
                        <div className="text-sm text-gray-600 mt-1 dark:text-gray-400 transition-colors">{fileSize}</div>
                    </div>
                    {{
                        '.pdf': <AiFillFilePdf className={classes}/>,
                        '.txt': <AiFillFileText className={classes}/>,
                        '.png': <AiFillFileImage className={classes}/>,
                        '.ppt': <AiFillFilePpt className={classes}/>,
                    }[fileType]}
                    <div className="bg-gray-100 px-6 py-4 flex items-center justify-center dark:bg-gray-700 transition-colors">
                        <a href={downloadLink} download className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 dark:bg-blue-100 dark:text-blue-800 dark:hover:bg-blue-200 dark:active:bg-blue-300 transition-colors">
                            <FaDownload className="w-4 h-4 mr-2"/>
                            <p className="font-medium">Download</p>
                        </a>
                    </div>
                </div>
            </div>
        </BasicFadeIn>
    );

};

const Downloads = ({children}: DownloadsProperties) => {

    return (
        <div className="px-8 pb-8">
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {children}
                </div>
            </div>
        </div>
    );

};

export default Downloads;
