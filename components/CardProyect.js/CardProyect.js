import style from "./CardProyect.module.css";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Img from "next/image";
import Link from "next/link";

export default function CardProyect({ img, title, link, info }) {
  return (
    <Box
      m={3}
      w={["100%", "100%", "400px", "400px"]}
      borderRadius={10}
      bg={"#eee"}
      _hover={{ outline: "0.1px solid teal" }}
    >
      <Flex justifyContent={"center"} p={5}>
        <Img
          src={require(`../../assets/imgs/${img}`)}
          width={"100%"}
          height={"100%"}
        />
      </Flex>
      <Heading
        as={"h4"}
        size={"md"}
        textAlign={"center"}
        py={3}
        color={"teal.700"}
      >
        {title}
      </Heading>
      <Text
        className={style.textContent}
        fontSize={["sm", "md", "md", "md"]}
        textAlign={"justify"}
        p={3}
        minH={"250px"}
        maxH={"250px"}
        color={"teal.700"}
        overflowY={"auto"}
      >
        {info}
      </Text>
      <Flex justifyContent={"center"} p={3}>
        <Link href={{ pathname: link }}>
          <a target={"_blank"} style={{ display: "block", width: "100%" }}>
            <Button colorScheme="teal" variant="#000" w={"100%"}>
              See project
            </Button>
          </a>
        </Link>
      </Flex>
    </Box>
  );
}
