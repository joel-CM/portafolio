import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const titleColor = useColorModeValue("#99cc99", "#558855");

  return (
    <Box py={"3rem"}>
      <Heading
        as={"h2"}
        fontSize={["sm", "md", "xl", "xl"]}
        py={5}
        textAlign={"center"}
        color={titleColor}
      >
        CONTACT
      </Heading>
      <HStack spacing={5} justifyContent={"center"} py={3}>
        <Box as={"span"} cursor={"pointer"}>
          <Link
            href={"https://www.linkedin.com/in/joel-c-dev"}
            target={"_blank"}
          >
            <BsLinkedin style={{ fontSize: "30px" }} />
          </Link>
        </Box>

        <Box as={"span"} cursor={"pointer"}>
          <Link href={"https://github.com/joel-CM"} target={"_blank"}>
            <AiFillGithub style={{ fontSize: "30px" }} />
          </Link>
        </Box>
      </HStack>
    </Box>
  );
}
