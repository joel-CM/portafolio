import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import theme from "../styles/theme.js";
import { ColorModeScript } from "@chakra-ui/react";

export default function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
