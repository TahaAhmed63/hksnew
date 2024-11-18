
"use-client"
import Header from "@/Components/Header/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/Components/Footer/footer";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import MiniCart from "@/Components/mincart/MiniCart";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);
  console.log(isClient,"isClient")
  return (
    <Provider store={store}>
   
        <Header />
        {isClient ? (
        <PersistGate loading={null} persistor={persistor } suppressHydrationWarning={true} >
          <Component {...pageProps}  suppressHydrationWarning={true} />
        </PersistGate>
      ) : (
        <Component {...pageProps}  suppressHydrationWarning={true} />
      )}
        <Footer />
        <MiniCart />
   
    </Provider>
  );
}
