import style from "./Layout.module.css";
import Footer from "../Footer/Footer";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Layout(props) {
  const router = useRouter();

  return (
    <div className={style.layout}>
      {/* header */}
      <Head>
        <title>Joel Chavez</title>
        <meta
          name="description"
          content="Hi, I'm Joel Chavez and recently I'm dedicated to web development."
        />
      </Head>
      {/* end header */}

      {/* navbar */}
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        bg={"#fff"}
        position={"sticky"}
        top={0}
        zIndex={100}
      >
        <GridItem alignSelf={"center"}>
          <Box
            as={"button"}
            fontSize={["1.5rem", "1.5rem", "2rem", "2.2rem"]}
            fontFamily={"Inspiration"}
            color={"teal"}
            px={10}
            py={3}
            onClick={() => router.push("/")}
          >
            Joel Chavez
          </Box>
        </GridItem>

        <GridItem justifySelf={"end"}>
          {/* menu desktop */}
          <DesktopMenu />
          {/* menu mobile */}
          <MobileMenu />
        </GridItem>
      </Grid>
      {/* end navbar */}

      {props.children}

      {/* footer */}
      <Footer />
    </div>
  );
}
