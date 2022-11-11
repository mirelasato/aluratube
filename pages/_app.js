import { ThemeProvider } from 'styled-components';
import { CSSReset } from "../src/components/CSSReset";
import React from 'react';
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import RegisterVideo from '../src/components/RegisterVideo';
const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    },
    pink: {
        backgroundBase: "#ffb8e6",
        backgroundLevel1: "#ffc8e6",
        backgroundLevel2: "#ffd8e6",
        borderBase: "#ffe8e6",
        textColorBase: "#710a60",
    }
};
// _app.js -> Definições globais do NextJS
// ThemeProvider -> PRover o tema para a app toda
// ColorModeProvider -> Prover o state de light/dark para todo mundo

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    );
}
function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);

    return (
            <ThemeProvider theme={theme[contexto.mode]} >
                <CSSReset />
                <Component {...pageProps} />
                <RegisterVideo/>
            </ThemeProvider>

    );
}
export default function _App(props){
    return (
        <ProviderWrapper>
            <MyApp {...props }/>
        </ProviderWrapper>
    )
}
