import {CryptoContextProvider} from "./context/crypto-context.jsx";
import AppLayout from "./components/layaut/AppLayout.jsx";
import {useState} from "react";

export default function App() {

    return (
        <CryptoContextProvider>
           <AppLayout />
        </CryptoContextProvider>
    )
};
