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
          onClick={() => router.push("/")}
        >
          Home
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={"teal.700"}
          _hover={{ bg: "#99dd99", color: "#fefffe" }}
          onClick={() => router.push("http://localhost:3000/#tech-skills")}
        >
          Tech Skills
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={"teal.700"}
          _hover={{ bg: "#99dd99", color: "#fefffe" }}
          onClick={() => router.push("http://localhost:3000/#projects")}
        >
          Projects
        </Box>
        <Box
          p={"5px 10px"}
          as={"button"}
          color={"teal.700"}
          _hover={{ bg: "#99dd99", color: "#fefffe" }}
          onClick={() => router.push("/contact")}
        >
          Contact
        </Box>
      </Flex>
    </Hide>
  );
}
