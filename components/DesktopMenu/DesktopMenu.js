import { Hide, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function DesktopMenu() {
  const router = useRouter();
  const color = useColorModeValue("teal.700", "#efffef");
  const bgHover = useColorModeValue("#99dd99", "#77bb77");

  return (
    <Hide breakpoint="(max-width: 770px)">
      <Flex justifyContent={"center"} alignItems={"center"} h={"full"}>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={color}
          _hover={{ bg: bgHover }}
          transition={"ease .20s"}
          onClick={() => router.push("#about-me")}
        >
          About me
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={color}
          _hover={{ bg: bgHover }}
          onClick={() => router.push("#tech-skills")}
        >
          Tech Skills
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={color}
          _hover={{ bg: bgHover }}
          onClick={() => router.push("#projects")}
        >
          Projects
        </Box>
      </Flex>
    </Hide>
  );
}
