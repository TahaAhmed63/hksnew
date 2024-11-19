"use-client";

import Header from "@/Components/Header/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/Components/Footer/footer";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import MiniCart from "@/Components/mincart/MiniCart";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import { Providers } from "@/store/ReduxProvider";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Indicate that the component has mounted
  }, []);

  // Ensure `PersistGate` only renders on the client to avoid SSR mismatch
  return (
    <Providers>
  

          <Header />
          <Component {...pageProps} />
          <Footer />
          <MiniCart />
    
  
    </Providers>
  );
}
