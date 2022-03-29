import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import Layout from "../components/Layout/Layout";

export default function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
