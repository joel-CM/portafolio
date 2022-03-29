import { Hide, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function DesktopMenu() {
  const router = useRouter();

  return (
    <Hide breakpoint="(max-width: 770px)">
      <Flex justifyContent={"center"} alignItems={"center"} h={"full"}>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={"teal.700"}
          _hover={{ bg: "#99dd99", color: "#fefffe" }}
          transition={"ease .20s"}
          onClick={() => router.push("#about-me")}
        >
          About me
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={"teal.700"}
          _hover={{ bg: "#99dd99", color: "#fefffe" }}
          onClick={() => router.push("#tech-skills")}
        >
          Tech Skills
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={"teal.700"}
          _hover={{ bg: "#99dd99", color: "#fefffe" }}
          onClick={() => router.push("#projects")}
        >
          Projects
        </Box>
      </Flex>
    </Hide>
  );
}
