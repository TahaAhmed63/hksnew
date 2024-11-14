import Header from "@/Components/Header/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "@/Components/Home/home-banner.jsx";
import Footer from "@/Components/Footer/footer";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} suppressHydrationWarning={true} />
        <Footer />
      </Provider>
    </div>
  );
}
