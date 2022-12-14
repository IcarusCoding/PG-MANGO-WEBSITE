import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";

import '../styles/Globals.scss'

const App = ({Component, pageProps}: AppProps) => {
  return (
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps}/>
      </ThemeProvider>
  );
};

export default App;
