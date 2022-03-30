import style from "./Layout.module.css";
import Footer from "../Footer/Footer";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Layout(props) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#fff", "teal.500");
  const color = useColorModeValue("teal", "#efffef");

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
        bg={bg}
        position={"sticky"}
        top={0}
        zIndex={100}
      >
        <GridItem alignSelf={"center"}>
          <Box
            as={"button"}
            fontSize={["1.5rem", "1.5rem", "2rem", "2.2rem"]}
            fontFamily={"Inspiration"}
            color={color}
            px={[5, 5, 10, 10]}
            py={3}
            onClick={() => router.push("/")}
          >
            Joel Chavez
          </Box>
          <Box as={"button"} py={3} mx={5} onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
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
